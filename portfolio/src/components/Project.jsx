import React from "react";
import { FaGithub } from "react-icons/fa";

import portfolioImg from "../assets/portfolio.png";
import weatherImg from "../assets/weather.png";
import zestImg from "../assets/zest.png";
import rideImg from "../assets/ride.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A sleek portfolio built with React and Tailwind CSS to showcase my skills and projects.",
    github: "https://github.com/SonuThapaMagar/Portfolio",
    image: portfolioImg,
  },
  {
    id: 2,
    title: "Weather App",
    description: "A real-time weather app that provides location-based weather updates with a clean and simple interface.",
    github: "https://github.com/SonuThapaMagar/weatherApp",
    image: weatherImg,
  },
  {
    id: 3,
    title: "Zest Fitness",
    description: "A fitness app designed to help users track their progress, set goals, and stay motivated with a smooth, interactive experience.",
    github: "https://github.com/SonuThapaMagar/Zest-Fitness",
    image: zestImg,
  },
  {
    id: 4,
    title: "Ride Rental",
    description: "A ride rental app to which allow the user to rent and ride bike or scooter on their own freedom.",
    github: "https://github.com/SonuThapaMagar/RideRental",
    image: rideImg,
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
            className="p-6 border-2 border-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-blue-500 hover:shadow-xl flex flex-col justify-between"
          >
            {/* Image Section */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-base">{project.description}</p>

            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-700 text-white hover:bg-gray-900 px-3 py-1.5 rounded-full text-sm"
              >
                <FaGithub className="mr-2 text-base" /> {/* Smaller GitHub Icon */}
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
