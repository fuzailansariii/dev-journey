"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";
import { ApiResponse } from "@/types/ApiResponse";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Loader2 } from "lucide-react";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const [debouncedUsername] = useDebounce(username, 300);

  useEffect(() => {
    const checkingUsername = async () => {
      if (debouncedUsername) {
        // console.log("Checking username: ", debouncedUsername);
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          const response = await axios.get<ApiResponse>(
            `/api/check-username?username=${debouncedUsername}`
          );
          // console.log("API response:", response.data);
          setUsernameMessage(response.data.message);
        } catch (error: any) {
          if (axios.isAxiosError(error)) {
            console.error("Axios error response:", error.response?.data);
          } else {
            console.error("Non-Axios error:", error);
          }
          toast.error("Registration failed.");
          return NextResponse.json({ success: false, message: error.message });
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkingUsername();
  }, [debouncedUsername]);

  const { register, handleSubmit, reset } = useForm<
    z.infer<typeof signUpSchema>
  >({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    // console.log(data);
    setIsSubmittingForm(true);

    try {
      const response = await axios.post<ApiResponse>("/api/auth/sign-up", data);
      toast.success("Registration Successfull, Please verify your email.");
      reset();
      // console.log(response.data);
      router.push(`/verify?username=${username}`);
      setIsSubmittingForm(false);
    } catch (error: any) {
      console.error("Frontend Error during registration: ", error);
      toast.error("Registration failed.");
      return NextResponse.json({ success: false, message: error.message });
    } finally {
      setIsSubmittingForm(false);
    }
  };

  return (
    <div className="flex justify-center mx-auto items-center w-full bg-slate-200 h-screen fixed overflow-hidden">
      <div className="w-full sm:w-3/4  lg:w-2/5 bg-white mx-5 rounded-lg border shadow-lg px-2 py-10">
        <div className="flex flex-col text-center space-y-2 font-poppins">
          <h1 className="text-4xl font-semibold">
            Register to <br />
            <strong>{"< DevJourney />"}</strong>
          </h1>
          <p className="text-xl sm:text-2xl">
            Fill the form to register yourself
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 sm:h-2/4 md:w-2/3 mx-auto mt-4"
        >
          <div className="w-full space-y-5 font-poppins">
            <Input
              {...register("username")}
              placeholder="Name"
              type="text"
              className="text-base border-slate-600"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {isCheckingUsername && <Loader2 className="animate-spin" />}
            {!isCheckingUsername && usernameMessage && (
              <p
                className={`text-xs ${
                  usernameMessage === "Username is availblr=e"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {usernameMessage}
              </p>
            )}
            <Input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="text-base border-slate-600"
            />
            <Input
              {...register("password")}
              placeholder="Password"
              type="password"
              className="text-base border-slate-600"
            />
          </div>
          <div className="mt-5">
            <Button
              disabled={isSubmittingForm}
              className="w-full text-base cursor-pointer"
            >
              {isSubmittingForm ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        </form>
        <div className="text-center mt-2">
          <p>
            Already a member?{" "}
            <Link className="text-blue-800 cursor-pointer" href={"/sign-in"}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
