import React from "react";
import Profile from "../assets/sonu.png";
import ProfileImg from "../assets/sonu1.jpg";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      {/* Introduction Section */}
      <section className="py-8">
        <div className="container mx-auto my-14 px-4 py-10 flex flex-col lg:flex-row items-center gap-4">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4 order-last lg:order-first">
            <h1 className="font-bold text-4xl">Hello, I'm</h1>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl py-3 gradient-text">
              Sonu Thapa Magar
            </h1>
            <p className="mt-4 text-gray-400">
              Tech Enthusiast || Undergraduate University Student
            </p>
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
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
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Myself Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-7xl">
          {/* Left Column for Image */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end order-last lg:order-first">
            <img
              src={ProfileImg}
              alt="Sonu Thapa Magar"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-gray-300 shadow-xl transition-transform transform hover:scale-105"
            />
          </div>

          {/* Right Column for Text */}
          <div className="lg:w-2/3 text-left space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold font-sans text-white mb-4">
              Nice to <span className="gradient-text">meet you</span>.
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold font-sans text-white mb-6">
              Please take a <span className="gradient-text">look</span> around!
            </h2>

            <p className="font-semibold text-xl text-gray-300 leading-relaxed text-justify mb-6">
              I discovered my passion for{" "}
              <span className="gradient-text">programming</span> unexpectedly
              and have been captivated ever since. Whether it’s building
              applications or solving complex problems, I find joy in coding.
            </p>
            <p className="font-semibold text-xl text-gray-300 leading-relaxed text-justify">
              Proficient in{" "}
              <span className="gradient-text">
                HTML, CSS, JavaScript, React,
              </span>{" "}
              and <span className="gradient-text">Tailwind CSS</span>. I have
              hands-on experience building responsive and user-friendly
              interfaces, and I’m continuously working to refine my expertise.
              Always learning, always growing!
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <div className="py-8 mb-8">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-Montserrat py-4">
              <span className="gradient-text">CONNECT</span> ME ON
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Feel free to <span className="gradient-text">connect</span> with
              me
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-row sm:flex-row justify-center sm:justify-start gap-6 py-4">
            {/* Social Links */}
            <a
              href="https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-blue-300 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/SonuThapaMagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-blue-300 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/_soucie_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-blue-300 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com/sonu.thapamagar.9083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-blue-300 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;
