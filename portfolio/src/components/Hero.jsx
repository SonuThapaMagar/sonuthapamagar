import React from "react";
import Profile from "../assets/sonu.png";
import ProfileBg from "../assets/Ellipse 1.png";

const Hero = () => {
    return (
        <main>
            {/* Introduction Section Started */}
            <section>
                <div className="container m-auto my-10 px-4 py-10 flex gap-3">
                    <div>
                        <h1 className="font-bold text-4xl">Hello, I'm Sonu.</h1>
                        <h1 className="font-bold text-4xl mt-1 gradient-text">
                            Frontend Developer
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
                    <div className="relative ml-auto">
                        <img
                            src={Profile}
                            alt="Sonu Thapa Magar"
                            width={520}
                            className="relative z-10"
                        />
                        <img
                            src={ProfileBg}
                            alt=""
                            className="absolute top-0 left-10 z-0"
                        />
                    </div>
                </div>
            </section>
            {/* Introduction Section Ended */}
            <section>
                <div className="container m-auto flex flex-col items-center justify-center min-h-screen text-center">
                    {/* Glitch animation for name */}
                    <div className="glitch animate-glitch animate-noiseAfter relative font-geologica font-bold text-white z-10 tracking-tight text-4xl whitespace-nowrap" data-text="Who is Sonu?">
                        Who is Sonu?
                    </div>
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
            </section>
        </main>
    );
};

export default Hero;
