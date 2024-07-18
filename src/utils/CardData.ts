import adminLogo from "@/assets/logo.png";
import { IconType } from "react-icons";
import {
  SiFirebase,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiReact,
  SiTailwindcss,
  SiX,
} from "react-icons/si";

export type SocialIconType = {
  icon: IconType;
  socialIconlink: string;
};

export type ProjectsType = {
  title: string;
  description: string;
  projectLink: string;
  icons: IconType[];
};

export type IdentityCardType = {
  title: string;
  image: any;
  name: string;
  email: string;
  icons: SocialIconType[];
};

// Projects Data
export const ProjectDetails: ProjectsType[] = [
  {
    title: "LinkedIn UI Clone",
    description:
      "A functional clone of the LinkedIn interface with features such as login, signup, posting, and profile management. Built using ReactJS, TailwindCSS, and Firebase",
    projectLink: "/",
    icons: [SiReact, SiTailwindcss, SiFirebase],
  },
  {
    title: "Food Recipe App",
    description:
      "Discover a variety of delicious recipes from around the world. Easily search by ingredients or dietary preferences. Perfect for all cooking levels, from beginners to experts",
    projectLink: "/",
    icons: [SiReact, SiTailwindcss],
  },
];

// ID card Data

// Social Icons for Hero Section
export const socialIcons: SocialIconType[] = [
  {
    icon: SiGithub,
    socialIconlink: "https://github.com/fuzailansariii",
  },
  {
    icon: SiLinkedin,
    socialIconlink: "https://www.linkedin.com/in/mohdfuzailansari/",
  },
  {
    icon: SiInstagram,
    socialIconlink: "https://www.instagram.com/fuzail.ansari_/",
  },
  { icon: SiX, socialIconlink: "/" },
];
export const IdentityCardData: IdentityCardType[] = [
  {
    image: adminLogo,
    title: "Full-Stack Developer",
    name: "Mohd Fuzail Ansari",
    email: "fuzailansarisecret@gmail.com",
    icons: socialIcons,
  },
];
