import React from 'react'
import sonu from "../assets/sonu.png";

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
    </section>
  )
}

export default About
