import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import nextIcon from "@/assets/nextIcon.svg";

export function OrbitingSkills() {
  const Icons = {
    SiReact,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiGithub,
    SiJavascript,
    FaJava,
    nextIcon,
  };
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] text-5xl w-10 h-10 border-none bg-transparent"
        radius={90}
        duration={30}
        delay={25}
        reverse
      >
        <Icons.SiJavascript className="hover:text-red-500 transition-colors duration-300 " />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] text-5xl w-10 h-10 border-none bg-transparent"
        radius={90}
        duration={30}
        reverse
      >
        <Icons.FaJava className="hover:text-red-500 transition-colors duration-300 " />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[30px] text-5xl w-10 h-10 border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.SiReact className="hover:text-red-500 transition-colors duration-300 " />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] text-5xl w-10 h-10 border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.SiMongodb className="hover:text-red-500 transition-colors duration-300 " />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] text-5xl w-10 h-10 border-none bg-transparent"
        radius={140}
        duration={20}
      >
        <Icons.SiNodedotjs className="hover:text-red-500 transition-colors duration-300 " />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] text-5xl w-10 h-10 border-none bg-transparent"
        radius={140}
        duration={20}
        delay={20}
      >
        <Icons.SiExpress className="hover:text-red-500 transition-colors duration-300 " />
      </OrbitingCircles>
    </div>
  );
}
