import { IdentityCardType, socialIcons } from "@/utils/CardData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdentityCard: React.FC<IdentityCardType> = ({
  title,
  name,
  email,
  image,
}) => {
  return (
    <div className="p-6 m-10 border rounded-xl shadow-lg flex flex-col items-center bg-white">
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          className="h-52 w-52 object-contain rounded-full shadow-lg border-4 border-red-500"
        />
      </div>
      <div className="font-nunito mt-2 flex flex-col items-center text-center">
        <h1 className="md:text-4xl text-2xl font-extrabold text-gray-900">
          {name}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <a
          href={`mailto:${email}`}
          className="text-base font-semibold cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          {email}
        </a>
        <div className="flex gap-8 text-3xl m-2 px-4 py-3 border rounded-2xl">
          {socialIcons.map((Icon, index) => (
            <Link
              key={index}
              href={Icon.socialIconlink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-800 hover:scale-125 transition-transform duration-300"
            >
              <Icon.icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
