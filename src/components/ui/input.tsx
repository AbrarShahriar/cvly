import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputShadcn = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md  bg-zinc-200 px-3 py-5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
InputShadcn.displayName = "InputShadcn";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  className?: string;
  placeholder?: string;
  value?: string;
  ref?: React.LegacyRef<HTMLInputElement>;
}

const Input = ({
  className,
  type,
  placeholder,
  label,
  value,
  ref,
  ...props
}: CustomInputProps) => {
  const data = label ? label.split(" ").join("") : "";
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={data}>{label}</Label>
      <InputShadcn
        ref={ref}
        className={className}
        type={type || "text"}
        id={data}
        name={data}
        placeholder={placeholder || ""}
        defaultValue={value || ""}
        {...props}
      />
    </div>
  );
};

export { Input };
