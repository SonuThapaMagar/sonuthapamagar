import React from 'react';
import deerImg from "../assets/deer.jpg";
import hackImg from "../assets/hacks.jpg";
import kusomImg from "../assets/kusom.jpg";
import techImg from "../assets/tech.jpg";

const achievements = [
    {
        id: 1,
        title: "Deerhack Hackathon - Interactive Technology Track Winner",
        description: "Won the Interactive Technology track at Deerhack Hackathon for creating an IoT-based Solid Waste Management system, contributing to sustainable urban development with smart waste solutions.",
        year: "2024",
        image: deerImg,
        link: "https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    },
    {
        id: 2,
        title: "Nepal Hacks Security Pal - 1st Runner Up",
        description: "Secured the 1st Runner Up position at Nepal Hacks for developing 'Maatri,' a maternal health-focused project aimed at improving health outcomes for mothers in Nepal through secure and accessible application.",
        year: "2024",
        image: hackImg,
        link: "https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    },
    {
        id: 3,
        title: "KUSOM IS Hackathon - Runner Up",
        description: "Awarded Runner Up at the KUSOM IS Hackathon for presenting an innovative IoT-based Solid Waste Management project, helping improve waste management efficiency using modern technology.",
        year: "2024",
        image: kusomImg,
        link: "https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    },
    {
        id: 4,
        title: "Girls in Tech - 5-Day IoT Workshop",
        description: "Attended a 5-day IoT workshop by Girls in Robotics and AI, hosted by Miss Tech and the Robotics Association of Nepal. Gained hands-on experience in robotics, AI, electronics, drone simulation, and 3D printing.",
        year: "2024",
        image: techImg,
        link: "https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    },
];

const Achievement = () => {
    return (
        <section className='mt-12 mx-auto max-w-7xl px-6 md:px-12'>
            <h2 className='text-4xl font-bold text-center mb-12 gradient-text'>Achievements</h2>

            <div className="flex flex-col gap-16 mb-8">
                {achievements.map((achievement, index) => (
                    <div
                        key={achievement.id}
                        className={`flex flex-col md:flex-row items-center gap-8 py-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                        {/* Image Section */}
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}>
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {achievement.title} - {achievement.year}
                            </h3>
                            <p className="mt-2 text-lg text-gray-300 leading-relaxed">
                                {achievement.description}
                            </p>
                            <a href={achievement.link} target='_blank' rel="noopener noreferrer">
                                <button className="mt-4 px-3 py-1.5 text-sm text-white rounded bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-purple-700 transition">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievement;
