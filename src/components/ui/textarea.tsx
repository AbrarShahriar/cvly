import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaShadcn = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "resize-none flex min-h-[60px] w-full bg-zinc-200 rounded-md px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextareaShadcn.displayName = "Textarea";

interface TextareaInterface {
  placeholder: string;
  label: string;
  row?: number;
  col?: number;
  className?: string;
}

export function Textarea({
  placeholder,
  label,
  row,
  col,
  className = "",
  ...props
}: TextareaInterface) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <TextareaShadcn
        className={className}
        rows={row || 3}
        cols={col || 0}
        placeholder={placeholder}
        id={label}
        {...props}
      />
    </div>
  );
}
