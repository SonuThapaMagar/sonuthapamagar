import React from 'react'
import deerImg from "../assets/deer.jpg"
import hackImg from "../assets/hacks.jpg"
import kusomImg from "../assets/kusom.jpg"
import techImg from "../assets/tech.jpg"
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
        description:"Awarded Runner Up at the KUSOM IS Hackathon for presenting an innovative IoT-based Solid Waste Management project, helping improve waste management efficiency using modern technology.",
        year: "2024",
        image: kusomImg,
        link: "https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    },
    {
        id: 4,
        title: "Girls in Tech - 5-Day IoT Workshop",
        description:"Attended a 5-day IoT workshop by Girls in Robotics and AI, hosted by Miss Tech and the Robotics Association of Nepal. Gained hands-on experience in robotics, AI, electronics, drone simulation, and 3D printing.",
        year: "2024",
        image: techImg,
        link: "https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    },
    
]
const Achievement = () => {
    return (
        <section className='mt-12 mx-auto max-w-6xl px-0'>
            <h2 className='text-4xl font-bold text-center mb-8 gradient-text'>Achievements</h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                        {/* Image Section */}
                        <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">{achievement.title} - {achievement.year}</h3>
                        <p className="mt-2 text-sm text-justify">{achievement.description}</p>
                        <a href={achievement.link} target='_blank' rel="noopener noreferrer">
                            <button className="text-sm mt-4 px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-blue-700 transition">
                                Learn More
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Achievement
