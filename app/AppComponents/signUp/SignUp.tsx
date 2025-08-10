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

export function SignUp() {
  return (
    <div>
      <AppLogo />
      <Card className="w-sm py-2">
        <CardHeader>
          <CardTitle className="text-[22px] font-bold">Sign up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-5 mt-3">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your name" required />
          </div>
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

            <Label htmlFor="password">Confirm Password</Label>

            <Input
              id="password"
              type="password"
              required
              placeholder="Your password..."
            />
          </div>

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
      </Card>
    </div>
  );
}
