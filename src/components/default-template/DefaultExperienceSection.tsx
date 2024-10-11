import React, { useEffect, useState } from "react";

import { Section } from "shared/Section";

interface ExperienceItem {
  company: string;
  position: string;
  time: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "KeepCoders",
    position: "React Developer",
    time: "Jul 2024 - Present",
    description:
      "As a Frontend Developer, I specialize in crafting interactive and visually engaging user interfaces for web applications. Utilizing React, Tailwind CSS, JavaScript, and Redux Toolkit, I translate design concepts into dynamic, responsive web pages. I also leverage libraries such as Material-UI and Ant Design to enhance and streamline my UI components. My role involves optimizing performance to ensure smooth interactions and integrating APIs to connect frontend and backend systems. Collaborating closely with UX/UI designers, I ensure that my interfaces meet design specifications and function seamlessly across devices and browsers."
  },
  {
    company: "KeepCoders",
    position: "MERN Internship",
    time: "Feb 2024 - Jul 2024",
    description:
      "During my MERN (MongoDB, Express.js, React, Node.js) internship, I gained hands-on experience with full-stack development, with a primary focus on frontend technologies. My role involved working extensively on the frontend components of web applications, using React to build dynamic user interfaces. I also gained exposure to backend development, contributing to API design and data management with MongoDB and Express.js. Throughout the internship, I was involved in various stages of the development lifecycle, enhancing both my frontend skills and understanding of full-stack integration."
  }
];

export const DefaultExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="experience" headingText="Experience">
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`p-6 bg-[#18212F] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative overflow-hidden ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-20 rounded-lg"></div>
            <div className="relative">
              <h3 className="text-3xl font-semibold text-gray-900">{experience.position}</h3>
              <h4 className="text-xl font-medium text-gray-700">{experience.company}</h4>
              <p className="text-gray-600">{experience.time}</p>
              <p className="mt-3 text-gray-800 leading-relaxed">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
