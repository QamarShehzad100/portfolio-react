import type { ReactElement } from "react";

import { Typography } from "components/core";

interface SectionProps {
  children: ReactElement | ReactElement[];
  id: string;
  headingText: string;
}

export const Section = ({ children, id, headingText }: SectionProps) => {
  return (
    <section id={id} className="flex flex-col ">
      <div className="flex flex-col gap-[40px] w-full my-[84px] mx-auto sm:my-[124px] ">
        <div className="animate-hidden flex flex-col w-full h-full text-xl">
          <Typography
            tag="h2"
            weight="semibold"
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {headingText}
          </Typography>
        </div>
        {children}
      </div>
    </section>
  );
};
