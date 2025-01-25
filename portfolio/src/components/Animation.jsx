// In Animation.jsx
import React from "react";
import { motion } from "framer-motion";

const TwinklingStars = () => {
    const stars = Array.from({ length: 50 }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random(),
        size: Math.random() * 4 + 1,
    }));

    return (
        <div className="absolute inset-0 z-0">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: star.y,
                        left: star.x,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                    animate={{
                        opacity: [star.opacity, 1, star.opacity],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default TwinklingStars;
