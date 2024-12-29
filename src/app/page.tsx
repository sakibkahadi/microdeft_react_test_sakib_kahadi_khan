import Link from "next/link";

export default async function Home() {
  return (
    <div className="space-y-10">
      <div
        style={{
          background: "linear-gradient(to right, red, blue)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundColor: "black",
        }}
        className="flex justify-center items-center text-center"
      >
        <h1 className="text-6xl font-extrabold">Welcome To My Task</h1>
      </div>
      <p className="text-4xl text-center font-extrabold">
        Please log in to view the task.
      </p>
      <div>
        <div className="flex items-center justify-center">
          <Link
            href="/login"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Go To Login Page
            </span>
            <span className="relative invisible"> Go To Login Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
