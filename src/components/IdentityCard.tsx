"use server";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

type IdentityPropCard = {
  title: string;
  name: string;
  email: string;
  image: any;
  icons: { icon: IconType; name: string }[];
};

const IdentityCard: React.FC<IdentityPropCard> = ({
  title,
  name,
  email,
  image,
  icons,
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
      <div className="font-nunito mt-4 flex flex-col space-y-2 items-center text-center">
        <h1 className="md:text-4xl text-3xl font-extrabold text-gray-900">
          {name}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        <a
          href={`mailto:${email}`}
          className="text-xl font-semibold cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          {email}
        </a>
        <div className="flex gap-4 mt-4 text-3xl text-gray-700">
          {icons.map(({ icon: Icon, name }, index) => (
            <Icon
              key={index}
              title={name}
              className="hover:text-red-500 transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
