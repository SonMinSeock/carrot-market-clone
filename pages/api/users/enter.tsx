import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";

import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
    where: {
      ...payload,
    },
  });

  console.log("user : ", user);

  return res.status(200).end();
}

export default withHandler("POST", handler);
