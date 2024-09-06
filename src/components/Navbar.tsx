"use client";
import { HamburgerMenuIcon, Cross2Icon, ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { User } from "next-auth";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/utils/MenuItems";

export default function Navbar() {
  // const pathname = usePathname();
  // const isSignUpPage = pathname === "/sign-up";

  const { data: session } = useSession();
  const user: User = session?.user as User;

  const pathname = usePathname();

  // Array of menu items for the navigation bar

  // mobile menu control
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between sm:justify-evenly px-6 py-4">
          <h1 className="sm:text-xl font-nunito font-bold hover:text-red-600 transition-colors duration-300">
            <Link href="/">{"<DevJourney />"}</Link>
          </h1>

          {/* Desktop menu */}
          <nav className="flex gap-10 font-nunito font-semibold ">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="hidden sm:block sm:text-lg cursor-pointer hover:text-red-600 transition-colors duration-300"
              >
                <Link href={menu.link}>{menu.title}</Link>
              </div>
            ))}
          </nav>

          <div className="sm:hidden block">
            {isOpen ? (
              <Cross2Icon
                className="w-[1.7rem] h-[1.7rem]"
                onClick={menuHandler}
              />
            ) : (
              <HamburgerMenuIcon
                className="w-[1.7rem] h-[1.7rem]"
                onClick={menuHandler}
              />
            )}
          </div>

          {/* User Sign-in and Sign-up Button */}
          <div className="items-center font-quicksand hidden sm:block">
            {!session ? (
              <div className="space-x-4">
                <div className="flex justify-center items-center gap-5">
                  <Link
                    href="/sign-up"
                    className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-opacity-90 font-semibold"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/sign-in"
                    className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-opacity-90 font-semibold"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-5">
                <p>
                  Hello,{" "}
                  <span className="font-quicksand font-semibold">
                    {user.username}
                  </span>
                </p>
                <ExitIcon
                  className="cursor-pointer"
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <Separator />
        {isOpen && <MobileMenu />}
      </div>
    </>
  );
}
