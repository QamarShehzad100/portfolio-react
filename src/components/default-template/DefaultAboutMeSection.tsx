import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import { gsap } from "gsap"; // Import GSAP
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

import illustationImg from "../../../public/portfolio-illustration.png";
import DefaultTypingAnimation from "./DefaultProjectsSection/DefaultTypingAnimation";

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
      tl.to(imgRef.current, { rotation: 170, duration: 15, ease: "power1.inOut" }) // Adjust duration to slow down the rotation
        .to(imgRef.current, { rotation: 0, duration: 15, ease: "power1.inOut" }); // Adjust duration to slow down the rotation
    }
  }, []);

  return (
    <Section id="about-me" headingText="">
      <div className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
        {/* typing component */}
        <DefaultTypingAnimation />
      </div>
      <div className="flex flex-col sm:gap-5 md:gap-16 lg:gap-36 xl:gap-36 sm:flex sm:flex-col md:flex md:flex-row  md:justify-center lg:flex lg:flex-row xl:flex xl:flex-row">
        <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
          <Typography
            tag="p"
            weight="semibold"
            className="text-primary text-xl sm:text-2xl"
          ></Typography>
          <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
            {`React Developer specializing in building dynamic, responsive web applications with expertise in JavaScript, HTML, CSS, React, and Redux Toolkit. I focus on crafting clean, efficient, and scalable code, ensuring seamless user experiences across all devices. Proficient in GSAP and Framer Motion, I bring animations to life, enhancing the visual appeal of web applications.

I excel at collaborating with cross-functional teams to create intuitive, user-friendly interfaces that align with business goals. As a problem-solver, I enjoy tackling complex challenges and delivering innovative solutions. Passionate about continuous learning, I stay current with the latest technologies and industry best practices.

Let’s connect to bring your ideas to life with high-performance, cutting-edge web applications!
`}
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
            className=" w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 "
            ref={imgRef} // Assign the reference to the image
            src={illustationImg}
            alt="animation-image"
          />
        </div>
      </div>
    </Section>
  );
};
