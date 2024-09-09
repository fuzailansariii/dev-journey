import { IdentityCardType, socialIcons } from "@/utils/CardData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdentityCard: React.FC<IdentityCardType> = ({
  title,
  name,
  email,
  image,
  language,
  nationality,
}) => {
  return (
    <div className="mx-5 py-8 px-3 border rounded-xl shadow-lg flex flex-col items-center bg-white">
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          className="h-52 w-52 object-contain rounded-full shadow-lg border-4 border-red-500"
        />
      </div>
      <div className="font-nunito mt-2 flex flex-col items-center">
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
        <p>{language}</p>
        <p>{nationality}</p>
      </div>
    </div>
  );
};

export default IdentityCard;
