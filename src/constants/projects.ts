import type { IconType } from "react-icons/lib";

import CodeWeb from "assets/projects/codeWeb.png?url";
import OldPortfolioUrl from "assets/projects/old-portfolio.png?url";
import PixeletteTechnologies from "assets/projects/pixelettetechnologies.png?url";
import TheLabzUrl from "assets/projects/the-labz.jpg?url";
import TwitterCloneUrl from "assets/projects/twitter-clone.png?url";
import WildOasis from "assets/projects/wildoasis.png?url";
import AirtableIcon from "icons/AirtableIcon";
import AwsIcon from "icons/AwsIcon";
import BuildIcon from "icons/BuildIcon";
import NextjsIcon from "icons/NextjsIcon";
import PrismaIcon from "icons/PrismaIcon";
import ReactIcon from "icons/ReactIcon";
import ReduxIcon from "icons/ReduxIcon";
import StorybookIcon from "icons/StorybookIcon";
import StyledComponentsIcon from "icons/StyledComponentsIcon";
import TailwindIcon from "icons/TailwindIcon";
import TestIcon from "icons/TestIcon";
import GraphqlIcon from "icons/TrpcIcon";
import trpcIcon from "icons/TrpcIcon";
import TypescriptIcon from "icons/TypescriptIcon";

const techTypes = [
  "Next.js",
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "Redux",
  "Prisma",
  "Styled Components",
  "TanStack Query",
  "Storybook",
  "Airtable",
  "AWS",
  "@craftjs/core",
  "Tailwind CSS",
  "tRPC",
  "Svelte",
  "GraphQL",
  "TypeGraphQL"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const nextjsTech: ProjectTech = { tech: "Next.js", icon: NextjsIcon };
const typeScriptTech: ProjectTech = { tech: "TypeScript", icon: TypescriptIcon };
const prismaTech: ProjectTech = { tech: "Prisma", icon: PrismaIcon };
const styledComponentsTech: ProjectTech = { tech: "Styled Components", icon: StyledComponentsIcon };
const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reduxTech: ProjectTech = { tech: "Redux", icon: ReduxIcon };
const testTech: ProjectTech = { tech: "Jest + RTL", icon: TestIcon };
const tanStackQueryTech: ProjectTech = { tech: "TanStack Query", icon: ReactIcon };
const storybookTech: ProjectTech = { tech: "Storybook", icon: StorybookIcon };
const airtableTech: ProjectTech = { tech: "Airtable", icon: AirtableIcon };
const awsTech: ProjectTech = { tech: "AWS", icon: AwsIcon };
const craftjsTech: ProjectTech = { tech: "@craftjs/core", icon: BuildIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const trpcTech: ProjectTech = { tech: "tRPC", icon: trpcIcon };
const graphqlTech: ProjectTech = { tech: "GraphQL", icon: GraphqlIcon };
const typeGraphqlTech: ProjectTech = { tech: "TypeGraphQL", icon: GraphqlIcon };
// const viteReactTech: ProjectTech = { tech: "Vite", icon: ViteIcon };
// const svelteTech: ProjectTech = { tech: "Svelte", icon: SvelteIcon };

export const projects: Project[] = [
  {
    title: "Pixelette Technologies",
    description:
      "I am trying to build Spotify with basic features.\n Basically, I build it because I want to check Next.js 13 app directory and master GraphQL with TypeGraphQL. Currently, you will find here only sign-in and sign-up functionality.",
    image: PixeletteTechnologies,
    url: "https://pixelette-technologies.vercel.app/",
    githubUrl: "https://github.com/QamarShehzad100/pixelette-technologies",
    techs: [typeScriptTech, tailwindCssTech, reactTech],
    isPinned: true
  },
  {
    title: "Code Web",
    description: "It solutions website",
    image: CodeWeb,
    url: "https://code-web-cyan.vercel.app/",
    githubUrl: "https://github.com/QamarShehzad100/code-web",
    techs: [typeScriptTech, tailwindCssTech, reactTech],
    isPinned: true
  },
  {
    title: "The Wild Oasis",
    description:
      "The wild Oasis is the dashboard for the hotels giving stats for hotel rooms and cabins ",
    image: WildOasis,
    url: "https://the-wild-oasis-eight-eta.vercel.app",
    githubUrl: "https://github.com/QamarShehzad100/The-Wild-Oasis",
    techs: [typeScriptTech, tailwindCssTech, reactTech, styledComponentsTech],
    isPinned: true
  },
  {
    title: "Twitter Clone",
    description:
      "As in the title, it is the Twitter clone 😄\n Responsive website with basic features.",
    image: TwitterCloneUrl,
    url: "https://twitter-clone-nextjs-coral.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/twitter-clone-nextjs",
    techs: [
      nextjsTech,
      typeScriptTech,
      trpcTech,
      prismaTech,
      testTech,
      styledComponentsTech,
      tanStackQueryTech
    ],
    isPinned: true
  },
  {
    title: "The Labz",
    description:
      "The project that I have been working in my previous job.\n The Labz platform gives creatives a robust multi-media toolbox from which they can mix and match audio, video, text, links, images, video chat, and more to curate a unique and dynamic experiences.",
    image: TheLabzUrl,
    url: "https://www.thelabz.com",
    techs: [
      nextjsTech,
      typeScriptTech,
      awsTech,
      airtableTech,
      prismaTech,
      craftjsTech,
      reduxTech,
      testTech,
      storybookTech,
      styledComponentsTech
    ],
    isPinned: true
  },
  {
    title: "Old portfolio",
    description: "Old portfolio that contains old projects.",
    image: OldPortfolioUrl,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [reactTech, typeScriptTech, styledComponentsTech]
  }
];
