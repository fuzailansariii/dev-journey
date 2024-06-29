"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isSignUpPage = pathname === "/sign-up";

  // Array of menu items for the navigation bar
  const menuItems = [
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
    { title: "Resume", link: "/resume" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between sm:justify-evenly px-6 py-4">
          <h1 className="sm:text-xl font-nunito font-bold">
            <Link href="/">{"<DevJourney />"}</Link>
          </h1>

          <nav className="flex gap-10 font-nunito font-semibold">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="hidden sm:block sm:text-lg cursor-pointer"
              >
                <Link href={menu.link}>{menu.title}</Link>
              </div>
            ))}
          </nav>

          <div className="sm:hidden block">
            <HamburgerMenuIcon className="w-[1.7rem] h-[1.7rem]" />
          </div>
          <div className="items-center font-quicksand hidden sm:block">
            {isSignUpPage ? (
              <div className="flex justify-center items-center gap-5">
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
      </div>
    </>
  );
}
