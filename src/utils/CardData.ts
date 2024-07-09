import adminLogo from "@/assets/logo.png";
import { IconType } from "react-icons";
import {
  SiExpress,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

export type SocialIconType = {
  name: string;
  icon: IconType;
  link: string;
};

export const IdentityCardData = [
  {
    image: adminLogo,
    title: "Full-Stack Developer",
    name: "Mohd Fuzail Ansari",
    email: "fuzailansarisecret@gmail.com",
    techIcons: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      { name: "Express.js", icon: SiExpress },
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
];

export const socialIcons: SocialIconType[] = [
  {
    name: "Github",
    icon: SiGithub,
    link: "https://github.com/fuzailansariii",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/mohdfuzailansari/",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    link: "https://www.instagram.com/fuzail.ansari_/",
  },
];
