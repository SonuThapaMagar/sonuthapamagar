import React from "react";
import Profile from "../assets/sonu.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      {/* Introduction Section Started */}
      <section>
        <div className="container m-32 my-10 px-4 flex flex-col lg:flex-row items-center gap-4">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h1 className="font-bold text-4xl">Hello, I'm</h1>
            <h1 className="font-bold text-6xl py-3 gradient-text">
              Sonu Thapa Magar
            </h1>
            <p className="mt-4 text-gray-400">
              Tech Enthusiast || Undergraduate University Student
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

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={Profile}
              alt="Sonu Thapa Magar"
              className="w-full max-w-sm lg:max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Introduction Section Ended */}
      {/* <section>
                <div className="container m-auto flex flex-col items-center justify-center min-h-screen text-center">
                    <div className="glitch animate-glitch animate-noiseAfter relative font-geologica font-bold text-white z-10 tracking-tight text-4xl whitespace-nowrap" data-text="Who is Sonu?">
                        Who is Sonu?
                    </div>
                    <div className="row flex">
                    <h1 className="mt-4 text-2xl font-semibold text-white">
                        Future <span className="font-bold text-blue-400">Software Engineer</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        I'm an Undergraduate <span className="font-bold text-blue-400">Tech Enthusiastic Student</span> who is keen about learning new <span className="font-bold text-blue-400">technologies</span>.
                    </p>
                    <p className="mt-4 text-lg text-gray-300">
                        I aspire to become a <span className="font-bold text-blue-500">Software Engineer</span>, focusing on <span className="font-bold text-yellow-400">Frontend Development</span> and <span className="font-bold text-blue-500">Backend Development</span> in the future.
                    </p>
                    </div>
                    <div className="row flex">
                        <h1>hello</h1>
                    </div>
                </div>

                <div className="m-auto connect">
                    <h1 className="font-san-serif font-bold text-color-white text-4xl text-center py-4 mb-4 mt-0">Connect Me</h1>

                </div>
            </section> */}
      <div className="flex justify-center mx-auto">
        <div>
          <h1 className="text-4xl font-bold font-Montserrat py-4 mx-auto">
            <span className="gradient-text">CONNECT</span> ME ON
          </h1>
          <p className="text-center">
            Feel free to <span className="gradient-text">connect</span> me
          </p>
          <div className="flex justify-center gap-6 py-4 mb-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-blue-300 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SonuThapaMagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-blue-300 transition duration-300"
            >
              <FaGithub size={30} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_soucie_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-blue-300  transition duration-300"
            >
              <FaInstagram size={30} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/sonu.thapamagar.9083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-blue-300  transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p className="text-sm">
          &copy;{new Date().getFullYear()} Sonu Thapa Magar. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Hero;
