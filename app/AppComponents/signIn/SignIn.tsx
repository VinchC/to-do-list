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

export function SignIn() {
  return (
    <div>
      <AppLogo />
      <Card className="w-sm py-2">
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
      </Card>
    </div>
  );
}
