import React from 'react'
import sonu from "../assets/sonu.png";
import { FaHtml5,FaFigma, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaPython ,FaJira} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
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
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold font-sans">WHO <strong className="gradient-text"> I'M</strong></h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between  max-w-7xl mx-auto">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2">
          <p className="mt-4">
            Hello Everyone! I'm <strong className='gradient-text'>Sonu Thapa Magar.</strong>
          </p>
          <p className="mt-4">
            I'm an undergraduate software engineering student aspiring to become a software engineer.
          </p>

          <h2 className="text-xl font-semibold mt-4">Beyond Tech, I Enjoy:</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2 text-xl">
              🎤 <span>Singing</span>
            </li>
            <li className="flex items-center gap-2 text-xl">
              ✈️ <span>Traveling</span>
            </li>
            <li className="flex items-center gap-2 text-xl">
              🎨 <span>Drawing</span>
            </li>
            <li className="flex items-center gap-2 text-xl">
              🧵 <span>Handicrafts</span>
            </li>
            <li className="flex items-center gap-2 text-xl">
              👗 <span>Fashion</span>
            </li>
          </ul>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sonu}
            alt="About Me"
            className="w-full md:w-[80%] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6"><strong className='gradient-text'>Tech</strong> Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md hover:scale-105 transition">
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-2 text-lg font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6"><strong className='gradient-text'>Tools</strong></h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md hover:scale-105 transition">
              <div className="text-5xl">{tool.icon}</div>
              <p className="mt-2 text-lg font-semibold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default About
