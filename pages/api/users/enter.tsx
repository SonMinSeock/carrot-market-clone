import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_KEY!);

const twilioClient = twilio(
  "AC9b7ce2b2a46f7e7a7279a55fbdb95c55",
  process.env.TWILIO_TOKEN
);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  if (!user)
    return res.json({
      ok: false,
    });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload}.`,
    // });
  } else if (email) {
    // const email = await mail.send({
    //   from: {
    //     email: "alstjr2538@naver.com",
    //   },
    //   to: "alstjr2538@naver.com",
    //   subject: "Your Carrot Market Verification Email.",
    //   text: `Your Token is ${payload}`,
    //   html: `<strong>Your Token is ${payload}</strong>`,
    // });
  }

  return res.json({
    ok: true,
  });
}

export default withHandler({
  method: "POST",
  handler,
  isPrivate: false,
});
