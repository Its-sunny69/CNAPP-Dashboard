import { Link } from "react-router";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
      <section>
        <div className="text-center">
          <h1 className="text-xl font-bold md:text-2xl">CNAPP Dashboard</h1>

          <div className="mt-2 flex flex-col items-center justify-center text-2xl font-extrabold sm:flex-row md:mt-4 md:text-4xl">
            <p>
              &#x5B;
              <span className="bg-linear-to-b from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent">
                Customize
              </span>
              ,
              <span className="bg-linear-to-b from-blue-500 to-violet-500 bg-clip-text font-extrabold text-transparent">
                Organize
              </span>
              ,
              <span className="bg-linear-to-b from-green-500 to-violet-500 bg-clip-text font-extrabold text-transparent">
                Control
              </span>
              &#x5D;
            </p>

            <p>Your Dashboard with Ease.</p>
          </div>
        </div>
      </section>

      <section className="my-10 grid gap-4 sm:grid-flow-col sm:text-lg">
        <div className="text-center sm:text-end">
          <h3 className="mb-4 font-semibold">✨ Key Features</h3>

          <ul className="text-gray-600">
            <li>Each dashboard section holds multiple widgets.</li>
            <li>Add, remove, and toggle widgets anytime.</li>
            <li>Instantly find the widget you need.</li>
            <li>Built with TailwindCSS for a clean and modern look.</li>
          </ul>
        </div>

        <hr className="mx-4 hidden h-full w-[2px] rounded bg-black sm:block" />

        <div className="text-center sm:text-start">
          <h3 className="mb-4 font-semibold">About this Assignment 👨‍💻</h3>

          <ul className="text-gray-600">
            <li>Component-driven development in React.</li>
            <li>State management using Context API.</li>
            <li>Handling real-time user interactions.</li>
            <li>Designing with TailwindCSS for a professional UI.</li>
          </ul>
        </div>
      </section>

      <Link to="/dashboard">
        <button className="group mt-10 cursor-pointer rounded-md bg-black px-4 py-2 font-medium text-white transition-all md:mt-14">
          <span className="px-1">
            Go to Dashboard <ArrowForwardIosRoundedIcon fontSize="small" />
          </span>
          <div className="mt-1 h-[1.5px] w-0 bg-white transition-all delay-100 duration-500 group-hover:w-full"></div>
        </button>
      </Link>
    </main>
  );
}
