import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

const DefaultTypingAnimation = () => {
  const textRef = useRef(null);
  const roles = ["Qamar Shehzad", "Frontend Developer", "JS Developer", "React Developer"];

  useEffect(() => {
    let index = 0;
    const changeText = () => {
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          textRef.current.textContent = roles[index];
          gsap.to(textRef.current, { opacity: 1, duration: 0.5 });
          index = (index + 1) % roles.length;
        }
      });
    };

    // Call changeText immediately to display the first role
    changeText();

    const interval = setInterval(changeText, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <div className="flex items-center space-x-2">
      <span className="whitespace-nowrap border-r-2 border-gray-600 pr-2 animate-typing">I'm</span>
      <span className="opacity-0 transition-opacity duration-500 text-primary " ref={textRef}>
        Qamar Shehzad
      </span>
    </div>
  );
};

export default DefaultTypingAnimation;
