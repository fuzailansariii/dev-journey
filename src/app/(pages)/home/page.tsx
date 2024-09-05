"use client"; // Ensure this component is rendered on the client side

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <Button
        onClick={() => signOut({ callbackUrl: "/" })} // Redirect to the home page after sign-out
        className="mt-4"
      >
        Sign Out <ExitIcon />
      </Button>
    </div>
  );
}
