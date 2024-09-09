"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { AboutMe, Education, Skills, socialLinks } from "@/utils/ResumeData";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IdentityCardData } from "@/utils/CardData";
import IdentityCard from "@/components/IdentityCard";

function Resume() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full md:w-3/4 mx-4 my-10">
        <div className="flex flex-col h-[55vh] items-center justify-center space-y-5">
          <h1 className="font-bold font-nunito text-4xl">
            Everything About Me
          </h1>
          <p className="text-lg text-center font-poppins">
            A passionate developer with a focus on clean, efficient code and
            modern web technologies. I thrive on learning, problem-solving, and
            building projects that make a difference.
          </p>
          <div className="flex space-x-5 rounded-xl border-2 px-5 py-3">
            {socialLinks.map((socailIcon, index) => (
              <Link
                key={index}
                className="cursor-pointer object-contain"
                href={socailIcon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socailIcon.icon className="size-8 hover:scale-125 transition-all duration-150" />
              </Link>
            ))}
          </div>
        </div>

        <Tabs.Root
          defaultValue="education"
          className="w-full md:w-4/5 mx- md:flex md:mx-auto md:gap-x-10"
        >
          <Tabs.List className="flex md:flex-col md:w-[25%] px-2 py-4 gap-x-4 md:gap-y-5 text-xl font-semibold">
            <Tabs.Trigger
              className="border-2 px-3 py-3 rounded-md hover:bg-slate-200 transition-all duration-150 md:w-full"
              value={"education"}
            >
              Education
            </Tabs.Trigger>
            <Tabs.Trigger
              className="border-2 px-3 py-3 rounded-md hover:bg-slate-200 transition-all duration-150 md:w-full"
              value={"skills"}
            >
              Skills
            </Tabs.Trigger>
            <Tabs.Trigger
              className="border-2 px-3 py-3 rounded-md hover:bg-slate-200 transition-all duration-150 md:w-full"
              value={"aboutme"}
            >
              About Me
            </Tabs.Trigger>
          </Tabs.List>

          <div className="md:w-[75%]">
            <Tabs.Content
              value="education"
              className="font-nunito font-semibold text-xl grid md:grid-cols-2 gap-x-5 gap-y-5"
            >
              {Education.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.college}</CardTitle>
                    <CardDescription>{item.course}</CardDescription>
                  </CardHeader>
                  <CardFooter>Year: {item.year}</CardFooter>
                </Card>
              ))}
            </Tabs.Content>
            <Tabs.Content
              className="grid grid-cols-3 gap-x-3 gap-y-3"
              value="skills"
            >
              {Skills.map((item, index) => (
                <Card
                  key={index}
                  className="p-5 flex items-start justify-center text-4xl"
                >
                  <item.icon name={item.name} />
                </Card>
                // <div key={index}>
                //   <item.icon name={item.name} />
                // </div>
              ))}
            </Tabs.Content>

            <Tabs.Content
              value="aboutme"
              className="font-nunito flex justify-center items-center font-semibold"
            >
              <div className="w-full">
                {IdentityCardData.map((data, index) => (
                  <IdentityCard
                    key={index}
                    title={data.title}
                    name={data.name}
                    email={data.email}
                    image={data.image}
                    language={data.language}
                    nationality={data.nationality}
                  />
                ))}
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Resume;
