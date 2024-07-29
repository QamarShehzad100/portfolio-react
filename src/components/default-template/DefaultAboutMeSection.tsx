import React, { useEffect, useRef, useState } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

// Function to generate a random position for icons
const getRandomPosition = (width: number, height: number) => ({
  x: Math.random() * (width - 50),
  y: Math.random() * (height - 50)
});

// Function to ensure no overlapping between icons
const getUniqueRandomPositions = (numIcons: number, width: number, height: number) => {
  const positions: { x: number; y: number }[] = [];
  const minDistance = 150;

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

export const DefaultAboutMeSection: React.FC = () => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement and update icon positions
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const container = containerRef.current;

    if (!container) return;

    const { offsetLeft, offsetTop } = container;
    const x = clientX - offsetLeft;
    const y = clientY - offsetTop;

    container.querySelectorAll(".icon").forEach((icon) => {
      const dx = (x - icon.getBoundingClientRect().left) * 0.1;
      const dy = (y - icon.getBoundingClientRect().top) * 0.1;

      (icon as HTMLElement).style.transform = `translate(${dx}px, ${dy}px)`;
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
    };

    updateIconsPosition();
    window.addEventListener("resize", updateIconsPosition);

    return () => window.removeEventListener("resize", updateIconsPosition);
  }, []);

  // Array of icon components to display
  const icons = [FaReact, FaGithub, FaNodeJs, FaJsSquare, FaCss3Alt, FaHtml5];

  return (
    <Section id="about-me" headingText="Qamar Shehzad">
      <div className="flex flex-col gap-5 sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">
        <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
          <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
            Frontend Developer | React Developer
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
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {/* Animated Icons Section */}
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="absolute icon"
              style={{
                top: `${positions[index]?.y}px`,
                left: `${positions[index]?.x}px`,
                fontSize: `${Math.random() * 28 + 45}px`,
                transition: "transform 0.1s ease-out"
              }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
