import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorHoverCard } from "./ErrorHoverCard";

function PasswordInput({ name, label }: { name: string; label: string }) {
  return (
    <div className="grid gap-2 relative">
      <Label htmlFor="password">{label}</Label>
      <Input
        id={name}
        type="password"
        placeholder="Your password..."
        required
      />
      <ErrorHoverCard message="Invalid password" />
    </div>
  );
}

export default PasswordInput;
