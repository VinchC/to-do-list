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
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../validationSchema";
import z from "zod";
import { toast } from "sonner";

type AuthFormData = z.infer<typeof authSchema>;

export function SignIn() {
  const methods = useForm<AuthFormData>({ resolver: zodResolver(authSchema) });

  const onSubmit = (data: AuthFormData) => {
    console.log("Sign in data:", data);
    toast("Sign in successful");
  };

  const handleErrorToast = () => {
    const { errors } = methods.formState;

    if (errors.email) {
      toast("Validation error");
    }

    if (errors.password) {
      toast("Validation error");
    }
  };
  return (
    <div>
      <AppLogo />
      <Card className="w-sm py-2">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, handleErrorToast)}>
            <CardHeader>
              <CardTitle className="text-[22px] font-bold">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-5 mt-3">
              <EmailInput name="email" label="Email" />
              <PasswordInput name="password" label="Password" />

              <div className="mt-4 text-sm flex items-center justify-center gap-1">
                <span>Don&apos;t have an account?</span>
                <Label className="text-primary">
                  <Link href={"/sign-up"}>Sign up</Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-3 w-full">
                <Button type="submit">Sign in</Button>
                <Button variant="outline">Sign in with Google</Button>
              </div>
            </CardFooter>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}
