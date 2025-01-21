import "./App.css";
import { useState } from "react";
import Profile from "./assets/sonu.png";
import ProfileBg from "./assets/Ellipse 1.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <header className="bg-dark-background sticky top-0 z-20 mx-auto flex w-full items-center justify-between">
        <div className="container m-auto px-4 py-4">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="font-bold text-xl">Sonu Thapa Magar</h1>
            </div>
            <div>
              <ul className="flex space-x-6">
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Project
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Navbar Ended */}

      {/* Introduction Section Started */}
      <main>
        <section>
          <div className="container m-auto my-10 px-4 py-10 flex gap-3">
            <div>
              <h1 className="font-bold text-4xl">Hello, I'm Sonu.</h1>
              <h1 className="font-bold text-4xl mt-1 gradient-text">
                Frontend Developer
              </h1>
              <p className="mt-4 text-gray-400">
                Tech Enthusiast || Undergraduate University Student{" "}
              </p>
              {/* Download Resume Button */}
              <a
                href="/resume.pdf" // The path to the resume PDF in the public folder
                download
                className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Download Resume
              </a>
            </div>
            <div className="relative ml-auto">
              <img
                src={Profile}
                alt="Sonu Thapa Magar"
                width={520}
                className="relative z-10"
              />
              <img
                src={ProfileBg}
                alt=""
                className="absolute top-0 left-10 z-0"
              />
            </div>
          </div>
        </section>
      </main>
      {/* Introduction Section Ended */}
    </>
  );
}

export default App;
