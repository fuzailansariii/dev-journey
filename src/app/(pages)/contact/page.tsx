"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/schemas/contactScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function Contactus() {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const { register, handleSubmit, reset } = useForm<
    z.infer<typeof contactSchema>
  >({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    setIsSubmittingForm(true);
    console.log(data);
    reset();
    setIsSubmittingForm(false);
  };
  return (
    <div className="flex justify-center items-center bg-slate-200 min-h-screen">
      <div className="w-full sm:w-3/4  lg:w-2/5 bg-white mx-5 rounded-lg border shadow-lg px-2 py-10">
        <div className="flex flex-col text-center space-y-2 font-poppins">
          <h1 className="text-4xl font-semibold">Contact Us Here</h1>
          <p className="text-xl sm:text-2xl">We Will response you ASAP!</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 sm:h-2/4 md:w-2/3 mx-auto mt-4"
        >
          <div className="w-full space-y-5 font-poppins">
            <Input
              {...register("username")}
              type="text"
              placeholder="Full Name"
            />
            <Input {...register("email")} type="email" placeholder="Email" />
            <Textarea {...register("message")} placeholder="Message" />
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
      </div>
    </div>
  );
}

export default Contactus;
