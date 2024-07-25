import { useEffect, useRef, useState } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

// Define motion variants for icon animation
const iconVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

// Function to generate a random position for icons
const getRandomPosition = (width, height) => ({
  x: Math.random() * (width - 50),
  y: Math.random() * (height - 50)
});

// Function to ensure no overlapping between icons
const getUniqueRandomPositions = (numIcons, width, height) => {
  const positions = [];
  const minDistance = 150; // Increased minimum distance between icons

  while (positions.length < numIcons) {
    const { x, y } = getRandomPosition(width, height);
    let overlap = false;

    for (const pos of positions) {
      const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));

      if (distance < minDistance) {
        overlap = true;
        break;
      }
    }

    if (!overlap) {
      positions.push({ x, y });
    }
  }

  return positions;
};

export const DefaultAboutMeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  // Handle mouse movement and update mousePosition state
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetLeft, offsetTop } = e.currentTarget;

    setMousePosition({
      x: clientX - offsetLeft,
      y: clientY - offsetTop
    });
  };

  // Update initial position of icons when the component mounts or window resizes
  useEffect(() => {
    const updateIconsPosition = () => {
      const container = containerRef.current;

      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const newPositions = getUniqueRandomPositions(6, width, height);

      setPositions(newPositions);

      gsap.utils.toArray(".icon").forEach((icon, index) => {
        const { x, y } = newPositions[index];

        gsap.set(icon, { x, y });
      });
    };

    updateIconsPosition();
    window.addEventListener("resize", updateIconsPosition);

    return () => window.removeEventListener("resize", updateIconsPosition);
  }, []);

  // Update icon positions based on mouse movement
  useEffect(() => {
    const handleMouseMoveAnimation = () => {
      const { x, y } = mousePosition;

      gsap.to(".icon", {
        x: (index, target) => {
          // Increase the multiplier for smoother motion
          const dx = (x - target.offsetLeft) * 0.8;

          return Math.max(Math.min(dx, 120), -120); // Limit movement to avoid overlap
        },
        y: (index, target) => {
          // Increase the multiplier for smoother motion
          const dy = (y - target.offsetTop) * 1;

          return Math.max(Math.min(dy, 120), -120); // Limit movement to avoid overlap
        },
        stagger: 10,
        ease: "power3.out"
      });
    };

    handleMouseMoveAnimation();
  }, [mousePosition]);

  // Array of icon components to display
  const icons = [FaReact, FaGithub, FaNodeJs, FaJsSquare, FaCss3Alt, FaHtml5];

  return (
    <Section id="about-me" headingText="Qamar Shehzad">
      <div className="flex flex-col gap-5 sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">
        <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
          <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
            React Developer | Frontend Developer
          </Typography>
          <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
            {`Hi, I'm Qamar Shehzad, a React Developer with one year of experience in creating dynamic, responsive web applications. Proficient in JavaScript, HTML, CSS, React, Redux Toolkit, GSAP, and Framer Motion, I specialize in writing clean, efficient, and maintainable code.

          I collaborate well with cross-functional teams to develop user-friendly interfaces that enhance user experiences and drive business growth. As a strong communicator and problem-solver, I'm always ready to tackle new challenges and find innovative solutions.

          Dedicated to continuous learning, I stay current with industry trends and best practices. Let's connect and bring your ideas to life with cutting-edge web applications.`}
          </Typography>
          <div className="flex gap-[12px]">
            <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <IconButton title="GitHub" size="large">
                <GithubIcon />
              </IconButton>
            </Link>
          </div>
        </div>
        <div
          className="relative flex justify-center items-center w-full h-[500px] overflow-hidden"
          id="about-me"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {/* Animated Icons Section */}
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute icon"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                fontSize: `${Math.random() * 80 + 50}px`
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
