import { SiAboutdotme } from "react-icons/si";
import { SiReaddotcv } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IconType } from "react-icons";

type menuItemstype = {
  title: string;
  link: string;
  icon: IconType;
};

export const menuItems: menuItemstype[] = [
  { title: "Contact", link: "/contact", icon: MdOutlineAlternateEmail },
  { title: "About", link: "/about", icon: SiAboutdotme },
  { title: "Resume", link: "/resume", icon: SiReaddotcv },
];
