import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400 first-line:bg-teal-500">
        Hello everybody~
      </p>
    </div>
  );
};

export default Home;
