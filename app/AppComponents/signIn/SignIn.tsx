import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppLogo } from "../AppLogo";
import Link from "next/link";

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
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              required
              placeholder="Your password..."
            />

            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

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
