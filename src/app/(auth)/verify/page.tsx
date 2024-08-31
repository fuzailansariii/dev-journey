"use client";
import { verifySchema } from "@/schemas/verificationCodeSchema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
  });

  return (
    <form className="flex justify-center items-center w-screen fixed h-screen bg-slate-200 overflow-hidden">
      <div className="w-full sm:w-2/6 bg-white py-16 rounded-xl border shadow-md">
        <div className="flex flex-col text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-poppins font-semibold">
            Verify your account
          </h1>
          <p className="text-xl font-poppins sm:text-2xl mt-3">
            Enter you verification code
          </p>
        </div>
        <div className="w-3/6 mx-auto">
          <Input className="border-slate-600 font-poppins font-semibold mb-5 text-center text-xl" />
          <Button className="w-full text-xl sm:text-base">Submit</Button>
        </div>
      </div>
    </form>
  );
}
