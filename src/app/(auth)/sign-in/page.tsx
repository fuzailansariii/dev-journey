"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/schemas/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function SignIn() {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    // console.log(data);
    setIsSubmittingForm(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    // console.log(result);

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        toast.error("Login Failed");
      } else {
        toast.error("An unknown error occurred.");
        setIsSubmittingForm(false);
      }
    } else if (result?.ok) {
      toast.success("Login successfull");
      router.replace("/home");
      setIsSubmittingForm(false);
    }
    reset();
  };

  return (
    <div className="flex justify-center mx-auto items-center w-full bg-slate-200 h-screen fixed overflow-hidden">
      <div className="w-full sm:w-3/4  lg:w-2/5 bg-white mx-5 rounded-lg border shadow-lg px-2 py-10">
        <div className="flex flex-col text-center space-y-2 font-poppins">
          <h1 className="text-4xl font-semibold">
            Login <br />
            <strong>{"< DevJourney />"}</strong>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 sm:h-2/4 md:w-2/3 mx-auto mt-4"
        >
          <div className="w-full space-y-5 font-poppins">
            <Input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="text-base border-slate-600"
            />
            {errors.email && (
              <p className="text-red-600">{`${errors.email.message}`}</p>
            )}
            <Input
              {...register("password")}
              placeholder="Password"
              type="password"
              className="text-base border-slate-600"
            />
            {errors.password && (
              <p className="text-red-600">{`${errors.password.message}`}</p>
            )}
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
            If you are new?{" "}
            <Link className="text-blue-800 cursor-pointer" href={"/sign-up"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
