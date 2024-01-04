import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Image1 from  "../../Images/header-laptop.svg";
import Image2 from  "../../Images/header-laptop-2.svg";
import  Image3 from "../../Images/header-laptop-3.svg";
const slides = [
    { id: 1, content: Image1 },
    { id: 2, content: Image2 },
    { id: 3, content:  Image3 },
    // Add more slides as needed
];

const AutoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {slides.map((slide, index) => (
                <animated.div
                    key={slide.id}
                    style={{
                        ...slideAnimation,
                        display: index === currentIndex ? 'block' : 'none',
                        transition: 'opacity 0.5s, transform 2s',
                    }}
                >
                        <img
                            src={slide.content}
                            className=" h-[40vh] md:w-[76vh] md:h-[76vh]"
                            height="100%"
                            width="100%"
                            alt="bannderphoto"
                            loading="eager"
                            />

                </animated.div>
            ))}
        </div>
    );
};

export default AutoSlider;
