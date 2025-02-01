import React from "react";
import { FaGithub } from "react-icons/fa";

import portfolioImg from "../assets/portfolio.png"
import weatherImg from "../assets/weather.png"



const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/SonuThapaMagar/Portfolio",
    image: portfolioImg,
  },
  {
    id: 2,
    title: "Weather App",
    description: "Fetches real-time weather data based on location.",
    github: "https://github.com/SonuThapaMagar/weatherApp",
    image: weatherImg,
  },
];

const Project = () => {
  return (
    <div className="mt-12 mx-auto py-10 px-8 max-w-6xl text-center">
      <h2 className="font-bold text-3xl mb-16 gradient-text text-center">
        My Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border-2 border-black-300 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-blue-500 hover:shadow-xl"
          >
            {/* Image Section */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-full mt-4"
            >
              <FaGithub className="mr-2" /> {/* GitHub Icon */}
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
