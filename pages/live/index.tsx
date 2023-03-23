import type { NextPage } from "next";
import { useRouter } from "next/router";

const Live: NextPage = () => {
  const router = useRouter();

  const navigateCreateLive = () => router.push(``);

  const navigateStream = (id: number) => router.push(`/live/${id}`);

  return (
    <div className="py-10  divide-y-2 space-y-4">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div className="pt-4 px-4" key={i}>
          <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
          <h3
            onClick={() => navigateStream(i)}
            className="text-gray-700 text-lg mt-2 cursor-pointer inline-block"
          >
            Let's try About
          </h3>
        </div>
      ))}
      <button
        onClick={navigateCreateLive}
        className="fixed hover:bg-orange-500  transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 text-white border-transparent "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Live;
