"use client";
import Footer from "@/components/Footer";
import { OrbitingSkills } from "@/components/OrbitingSkills";
import { socialIcons } from "@/utils/CardData";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <div className="md:max-w-screen-xl md:mx-auto md:flex md:justify-between md:gap-x-3 my-8 items-center">
        <div className="md:w-1/2 flex items-center md:h-[80vh] h-[50vh]">
          <div className="px-5 text-left">
            <h1 className="font-quicksand text-5xl font-semibold text-gray-800">
              {"Hi, I'm "}
              <span className="text-red-800">FUZAIL</span>
            </h1>
            <h2 className="font-poppins text-2xl ">
              Full-Stack Developer & Designer
            </h2>
            <p className="font-quicksand mt-5 text-lg">
              With a passion for creating seamless user experiences and a knack
              for solving complex problems, I specialize in building responsive,
              high-performance web applications. My expertise spans across
              various technologies including Next.js, React, and Tailwind CSS.
            </p>
            <div className="flex space-x-5 text-3xl mt-3 justify-center md:justify-start">
              {socialIcons.map(({ icon: Icon, socialIconlink }, index) => (
                <div key={index} className="cursor-pointer text-gray-800">
                  <Link
                    href={socialIconlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-gray-800 hover:text-red-500 transition-colors duration-300"
                  >
                    <Icon />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <OrbitingSkills />
        </div>{" "}
      </div>
      <Footer />
    </>
  );
};

export default Home;
