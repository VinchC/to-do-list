import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorHoverCard } from "./ErrorHoverCard";

function EmailInput({ name, label }: { name: string; label: string }) {
  return (
    <div className="grid gap-2 relative">
      <Label htmlFor="email">{label}</Label>
      <Input id={name} type="email" placeholder="m@example.com" required />
      <ErrorHoverCard message="Email required" />
    </div>
  );
}

export default EmailInput;
