"use client";
import { ExitIcon } from "@radix-ui/react-icons";
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { menuItems } from "@/utils/MenuItems";

const MobileMenu = () => {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <div
      className="w-full h-screen bg-neutral-800/70 overflow-x-hidden overflow-y-auto
    fixed z-50 outline-none focus:outline-none "
    >
      <nav className="bg-white w-2/3 p-3 h-full">
        {/* display username or login/signup button */}
        <div>
          {!session ? (
            <div className="flex items-center justify-between">
              <Link
                href="/sign-up"
                className="px-4 py-2 rounded-md border-2 focus:text-red-600 transition-all duration-200 font-semibold"
              >
                Sign Up
              </Link>
              <h1 className="font-bold text-2xl font-quicksand">{"</>"}</h1>
              <Link
                href="/sign-in"
                className="px-4 py-2 rounded-md border-2 focus:text-red-600 transition-all duration-200 font-semibold"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <div className="flex justify-between px-3 items-center gap-5">
              <p className="text-xl">
                Hello,{" "}
                <span className="font-quicksand font-semibold">
                  {user.username}
                </span>
              </p>
              <ExitIcon
                className="cursor-pointer size-6"
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                }}
              />
            </div>
          )}
        </div>
        <Separator className="my-5" />
        <div>
          {menuItems.map((menu, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3 my-2">
                <menu.icon className="text-2xl" />
                <Link
                  href={menu.link}
                  className="cursor-pointer inline font-quicksand font-semibold text-xl"
                >
                  {menu.title}
                </Link>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
