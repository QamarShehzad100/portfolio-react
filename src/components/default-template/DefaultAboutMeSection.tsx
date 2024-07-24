import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

export const DefaultAboutMeSection = () => {
  return (
    <Section id="about-me" headingText="Qamar Shehzad">
      <div className="flex flex-col gap-5 sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">
        <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
          <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
            React Developer
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
        <div>Sec</div>
      </div>
    </Section>
  );
};
