import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiExpress,
  SiGeeksforgeeks,
  SiGithub,
  SiJavascript,
  SiLeetcode,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiX,
} from "react-icons/si";

type Education = {
  course: string;
  college: string;
  year: string;
};

type Skills = {
  name: string;
  icon: IconType;
};

type AboutMe = {
  name: string;
  email: string;

};

type socialLinks = {
  icon: IconType;
  link: string;
};

export const Education: Education[] = [
  {
    course: "B.Tech",
    college: "Kanpur Institute of Technology, Kanpur",
    year: "2021",
  },
  { course: "Intermediate", college: "SDIC, Prayagraj", year: "2015" },
  { course: "High School", college: "SDIC, Prayagraj", year: "2013" },
];

export const Skills: Skills[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React.js", icon: SiReact },
  { name: "MongoDB", icon: SiMongodb },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Java", icon: FaJava },
  { name: "GitHub", icon: SiGithub },
];

export const AboutMe: AboutMe[] = [
  {
    name: "Mohd Fuzail Ansari",
    email: "fuzailansarisecret@gmail.com",
  },
];

export const socialLinks: socialLinks[] = [
  {
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/mohdfuzailansari/",
  },
  {
    icon: SiGithub,
    link: "https://github.com/fuzailansariii",
  },
  {
    icon: SiX,
    link: "https://x.com/fuzail_ansarii",
  },
  {
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/ansariiifuzail/",
  },
  {
    icon: SiLeetcode,
    link: "https://leetcode.com/u/ansariiifuzail/",
  },
];

export const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "nodedotjs",
  "express",
  "nextdotjs",
  "vercel",
  "git",
  "github",
  "tailwindcss",
];
