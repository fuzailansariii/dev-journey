"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { verifySchema } from "@/schemas/verificationCodeSchema";
import { ApiResponse } from "@/types/ApiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function page() {
  const router = useRouter();
  const [isVerifing, setIsVerifying] = useState(false);
  const searchParams = useSearchParams();
  const usernameParam = searchParams.get("username");

  const { register, handleSubmit, reset } = useForm<
    z.infer<typeof verifySchema>
  >({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    const code = data.VerificationCode;
    setIsVerifying(true);
    try {
      const response = await axios.post("/api/verify", {
        username: usernameParam,
        verificationCode: code,
      });
      toast.success("Code is verified.");
      reset();
      router.replace("/sign-in");
    } catch (error) {
      console.log("Error in verification: ", error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage =
        axiosError.response?.data.message || "Registration failed";
      toast.error(errorMessage);
      console.log(axiosError.response?.data.message);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center w-screen fixed h-screen bg-slate-200 overflow-hidden"
    >
      <div className="w-full sm:w-3/4 md:h-3/6 lg:w-2/5 bg-white py-16 rounded-xl border shadow-md">
        <div className="flex flex-col text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-poppins font-semibold">
            Verify your account
          </h1>
          <p className="text-xl font-poppins sm:text-2xl mt-3">
            Enter you verification code
          </p>
        </div>
        <div className="w-3/6 mx-auto">
          <Input
            {...register("VerificationCode")}
            className="border-slate-600 font-poppins font-semibold mb-5 text-center text-xl"
          />
          <Button type="submit" className="w-full text-xl sm:text-base">
            {isVerifing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
