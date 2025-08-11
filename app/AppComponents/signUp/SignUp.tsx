"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AppLogo } from "../AppLogo";
import Link from "next/link";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../validationSchema";
import z from "zod";
import { toast } from "sonner";

type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUp() {
  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Sign up data:", data);
    toast("Sign up successful");
  };

  const handleErrorToast = () => {
    const { errors } = methods.formState;

    if (errors.email) {
      toast("Validation error");
    }

    if (errors.password || errors.confirmPassword) {
      toast("Passwords must match");
    }
  };

  return (
    <div>
      <AppLogo />
      <Card className="w-sm py-2">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, handleErrorToast)}>
            <CardHeader>
              <CardTitle className="text-[22px] font-bold">Sign up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-5 mt-3">
              <EmailInput name="email" label="Email" />
              <PasswordInput name="password" label="Password" />

              <PasswordInput name="confirmPassword" label="Confirm Password" />
              <div className="mt-4 text-sm flex items-center justify-center gap-1">
                <span>Already have an account?</span>
                <Label className="text-primary">
                  <Link href={"/"}>Sign in</Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-3 w-full">
                <Button type="submit">Create an account</Button>
              </div>
            </CardFooter>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}
