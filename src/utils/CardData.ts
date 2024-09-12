import adminLogo from "@/assets/logo.png";
import LinkedInUIClone from "@/assets/LinkedInUIClone.png";
import MyKitchen from "@/assets/MyKitchenImage.png";
import DevJourney from "@/assets/DevJourney.png";
import { IconType } from "react-icons";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export type SocialIconType = {
  icon: IconType;
  socialIconlink: string;
};

export type GithubLink = {
  icon: IconType;
  link: string;
};

export type ProjectsType = {
  title: string;
  description: string;
  projectLink: string;
  projectImage: any;
  tech: string;
  githubLink: GithubLink[];
};

export type IdentityCardType = {
  title: string;
  image: any;
  name: string;
  email: string;
  language: string;
  nationality: string;
};

// Projects Data
export const ProjectDetails: ProjectsType[] = [
  {
    title: "LinkedIn UI Clone",
    description:
      "A functional clone of the LinkedIn interface with features such as login, signup, posting, and profile management. Built using ReactJS, TailwindCSS, and Firebase",
    projectLink: "https://linkedin-clone-beryl-five.vercel.app/",
    projectImage: LinkedInUIClone,
    tech: "React.js, TailwindCSS, Firebase",
    githubLink: [
      {
        icon: SiGithub,
        link: "https://github.com/fuzailansariii/linkedin-clone",
      },
    ],
  },
  {
    title: "Food Recipe App",
    description:
      "Discover a variety of delicious recipes from around the world. Easily search by ingredients or dietary preferences. Perfect for all cooking levels, from beginners to experts",
    projectLink: "https://my-kitchen-recipes.vercel.app/",
    projectImage: MyKitchen,
    tech: "React.js, TailwindCSS",
    githubLink: [
      {
        icon: SiGithub,
        link: "https://github.com/fuzailansariii/MyKitchenRecipes",
      },
    ],
  },

  {
    title: "DevJourney",
    description:
      "A fully responsive full-stack portfolio built to showcase my skills. It features a user authentication system, dynamic project displays, and clean UI to highlight my expertise in modern web development.",
    projectLink: "https://dev-journey-three.vercel.app/",
    projectImage: DevJourney,
    tech: "Next.js, TailwindCSS, MongoDB, Prisma",
    githubLink: [
      { icon: SiGithub, link: "https://github.com/fuzailansariii/dev-journey" },
    ],
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
    language: "English, Hindi, Urdu",
    nationality: "INDIAN",
  },
];
