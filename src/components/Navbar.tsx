"use client";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const pathname = usePathname();
  const isSignUpPage = pathname === "/sign-up";
  const router = useRouter();

  // Array of menu items for the navigation bar
  const menuItems = [
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
    { title: "Resume", link: "/resume" },
  ];

  // mobile menu control
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const menuCloseHandler = () => {
      setIsOpen(false);
    };
    router.events.on("routeChangeStart", menuCloseHandler);
    return () => {
      router.events.off("routeChangeStart", menuCloseHandler);
    };
  }, [router.events]);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between sm:justify-evenly px-6 py-4">
          <h1 className="sm:text-xl font-nunito font-bold hover:text-red-600 transition-colors duration-300">
            <Link href="/">{"<DevJourney />"}</Link>
          </h1>

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
          <div className="items-center font-quicksand hidden sm:block">
            {isSignUpPage ? (
              <div className="flex justify-center items-center gap-5 ">
                <p>Already a member? </p>
                <Link
                  href="/sign-in"
                  className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-opacity-90 font-semibold"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-5">
                <p>New to DevJourney? </p>
                <Link
                  href="/sign-up"
                  className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-opacity-90 font-semibold"
                >
                  Join us
                </Link>
              </div>
            )}
          </div>
        </div>
        <Separator />
        {isOpen && (
          <nav className="sm:hidden flex flex-col items-center py-5 gap-y-4 font-poppins">
            {menuItems.map((menu, index) => (
              <div key={index}>
                <Link href={menu.link} className="text-lg">
                  {menu.title}
                  <Separator />
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
