import Layout from "@/components/layout";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Chats: NextPage = () => {
  const router = useRouter();

  const navigateChatDetail = (id: number) => router.push(`/chats/${id}`);
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex px-4 cursor-pointer py-3 items-center space-x-3"
            onClick={() => navigateChatDetail(i)}
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm  text-gray-500">
                See you tomorrow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
