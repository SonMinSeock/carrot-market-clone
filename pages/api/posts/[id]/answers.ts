import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { answer },
  } = req;

  const isPost = await client.post.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
    },
  });

  console.log("post 존재핬는지 확인 : ", isPost);

  if (!isPost) {
    return res.status(404).json({
      ok: false,
      error: { message: "post가 존재하지 않습니다." },
    });
  }

  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      post: {
        connect: {
          id: Number(id),
        },
      },
      answer,
    },
  });

  console.log("backend 새로운 답변 : ", newAnswer);

  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
