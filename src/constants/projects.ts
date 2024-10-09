import type { IconType } from "react-icons/lib";

import CodeWeb from "assets/projects/codeWeb.png?url";
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
      "Discover Pixelette Technologies' Global Impact From our beginnings in 2018, Pixelette Technologies has rapidly become a world leader in software development, specialising in AI and blockchain technologies.",
    image: PixeletteTechnologies,
    url: "https://pixelette-technologies.vercel.app/",
    githubUrl: "https://github.com/QamarShehzad100/pixelette-technologies",
    techs: [reactTech],
    isPinned: false
  },
  {
    title: "Code Web",
    description:
      "Welcome to Web an IT, where innovation meets excellence. With a passion for technology and a commitment to quality, we deliver cutting-edge web solutions tailored to your needs.",
    image: CodeWeb,
    url: "https://code-web-cyan.vercel.app/",
    githubUrl: "https://github.com/QamarShehzad100/code-web",
    techs: [tailwindCssTech, reactTech],
    isPinned: false
  },
  {
    title: "The Wild Oasis",
    description:
      "The wild Oasis is the dashboard for the hotels giving stats for hotel rooms and cabins ",
    image: WildOasis,
    url: "https://the-wild-oasis-eight-eta.vercel.app",
    githubUrl: "https://github.com/QamarShehzad100/The-Wild-Oasis",
    techs: [tailwindCssTech, reactTech, styledComponentsTech],
    isPinned: false
  },
  {
    title: "Twitter Clone",
    description:
      "As in the title, it is the Twitter clone 😄\n Responsive website with basic features.",
    image: TwitterCloneUrl,
    url: "https://twitter-clone-nextjs-coral.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/twitter-clone-nextjs",
    techs: [nextjsTech, typeScriptTech, styledComponentsTech],
    isPinned: false
  },
  {
    title: "The Labz",
    description:
      "The project that I have been working in my previous job.\n The Labz platform gives creatives a robust multi-media toolbox from which they can mix and match audio, video, text, links, images, video chat, and more to curate a unique and dynamic experiences.",
    image: TheLabzUrl,
    url: "https://www.thelabz.com",
    techs: [typeScriptTech, reduxTech, styledComponentsTech],
    isPinned: false
  }
];
