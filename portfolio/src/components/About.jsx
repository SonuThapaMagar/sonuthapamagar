import React from 'react';
import sonu from "../assets/sonu.png";
import { FaHtml5, FaFigma, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaPython, FaJira } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
];

const tools = [
  { name: "GitHub", icon: <FaGithub className="text-white-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
  { name: "Jira", icon: <FaJira className="text-blue-700" /> },
];

const About = () => {
  return (
    <section className="mt-16 px-2">
      {/* Title */}
      <div className="text-center mb-8 font-poppins">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          WHO <strong className="gradient-text">I'M</strong>
        </h1>
      </div>

      {/* Content and Image Section */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2 font-inter leading-relaxed px-4">
          <p className="mt-4 text-3xl md:text-4xl">
            Hello Everyone! I'm <strong className='gradient-text'>Sonu Thapa Magar.</strong>
          </p>
          <p className="mt-4 text-2xl md:text-3xl">
            I'm an undergraduate software engineering student aspiring to become a software engineer.
          </p>
          <p className="mt-4 text-2xl md:text-3xl">
            I’m passionate about both <strong className='gradient-text text-xl'>Frontend & Backend Development</strong>, always eager to learn new technologies.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-6">Beyond Tech, I Enjoy:</h2>
          <ul className="mt-4 text-xl space-y-2">
            <li className="flex items-center">
              <span className="text-cyan-500 text-xl mr-2">★</span> Singing
            </li>
            <li className="flex items-center">
              <span className="text-cyan-500 text-xl mr-2">★</span> Traveling
            </li>
            <li className="flex items-center">
              <span className="text-cyan-500 text-xl mr-2">★</span> Drawing
            </li>
            <li className="flex items-center">
              <span className="text-cyan-500 text-xl mr-2">★</span> Handicrafts
            </li>
            <li className="flex items-center">
              <span className="text-cyan-500 text-xl mr-2">★</span> Fashion
            </li>
          </ul>
          <p className="mt-4 text-2xl md:text-3xl">
            I believe in maintaining a balanced life by indulging in creative hobbies.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-8 md:mb-0 md:ml-8">
          <img
            src={sonu}
            alt="About Me"
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6"><strong className='gradient-text'>Tech</strong> Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md hover:scale-105 transition">
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-2 text-lg md:text-xl font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6"><strong className='gradient-text'>Tools</strong></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md hover:scale-105 transition">
              <div className="text-5xl">{tool.icon}</div>
              <p className="mt-2 text-lg md:text-xl font-semibold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
