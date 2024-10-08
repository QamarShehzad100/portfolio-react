import React, { useEffect, useRef, useState } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import { gsap } from "gsap"; // Import GSAP
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

// Function to ensure no overlapping between icons
const getUniqueRandomPositions = (numIcons: number, width: number, height: number) => {
  const positions: { x: number; y: number }[] = [];
  const minDistance = 150;

  while (positions.length < numIcons) {
    const x = Math.random() * (width - 50);
    const y = Math.random() * (height - 50);
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
  const imgRef = useRef<HTMLImageElement>(null); // Create a reference for the image

  // Update initial position of icons when the component mounts or window resizes
  useEffect(() => {
    const updateIconsPosition = () => {
      const container = document.querySelector(".relative");

      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const newPositions = getUniqueRandomPositions(6, width, height);

      setPositions(newPositions);
    };

    updateIconsPosition();
    window.addEventListener("resize", updateIconsPosition);

    return () => window.removeEventListener("resize", updateIconsPosition);
  }, []);
  // Adding rotation animations for the illustration
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Creating a GSAP timeline

    if (imgRef.current) {
      tl.to(imgRef.current, { rotation: 270, duration: 10, ease: "power1.inOut" }) // Adjust duration to slow down the rotation
        .to(imgRef.current, { rotation: 0, duration: 10, ease: "power1.inOut" }); // Adjust duration to slow down the rotation
    }
  }, []);

  return (
    <Section id="about-me" headingText="Qamar Shehzad">
      <div className="flex flex-col gap-5 sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">
        <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
          <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
            Frontend Developer | React Developer
          </Typography>
          <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
            {`Hi, I'm Qamar Shehzad, a React Developer with an year of experience in creating dynamic, responsive web applications. Proficient in JavaScript, HTML, CSS, React, Redux Toolkit, GSAP, and Framer Motion, I specialize in writing clean, efficient, and maintainable code.

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
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
          <img
            ref={imgRef} // Assign the reference to the image
            src="src/assets/sections/portfolio-illustration.png"
            alt=""
            style={{ width: 400, height: 400 }}
          />
        </div>
      </div>
    </Section>
  );
};
