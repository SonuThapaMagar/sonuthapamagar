import React from "react";
import Profile from "../assets/sonu.png";
import ProfileImg from "../assets/sonu1.jpg";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      {/* Introduction Section Started */}
      <section>
        <div className="container m-32 my-14 px-4 py-10 flex flex-col lg:flex-row items-center gap-4">
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

      {/* About Myself */}
      <section>
        <div className="flex flex-col lg:flex-row items-center gap-24 p-8 m-32 my-20 px-4">
          {/* Left Column for h1 */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={ProfileImg}
              alt="Sonu Thapa Magar"
              className="w-96 h-96 object-cover mr-24 rounded-full border-4 border-gray-300 shadow-lg"
            />
          </div>
          {/* Right Column for Text */}
          <div className="lg:w-1/2 text-left space-y-4 mr-24">
            <h1 className="text-5xl font-bold font-sans text-white-800 mb-2">
              Nice to <span className="gradient-text">meet you.</span>
            </h1>
            <h1 className="text-3xl font-bold font-sans text-white-800">
              Please take a <span className="gradient-text">look</span> around!
            </h1>
            <p className="font-semibold text-xl text-gray-300 leading-relaxed text-justify">
              I discovered my passion for{" "}
              <span className="gradient-text">programming </span>unexpectedly
              and have been captivated ever since.
            </p>
            <p className="font-semibold text-xl text-gray-300 leading-relaxed text-justify">
              Proficient in{" "}
              <span className="gradient-text">
                HTML, CSS, JavaScript, React,
              </span>{" "}
              and<span className="gradient-text"> Tailwind CSS.</span> I have
              hands-on experience building responsive and user-friendly
              interfaces, and I’m continuously working to refine my expertise.
            </p>
          </div>
        </div>
      </section>
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
      {/* About Myself Ended */}
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p className="text-sm">
          &copy;{new Date().getFullYear()} Sonu Thapa Magar. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
};

export default Hero;
