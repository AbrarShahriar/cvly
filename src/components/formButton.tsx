"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function FormButton({ children, className, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...rest}
      className="bg-slate-900 w-fit text-white font-bold flex my-5 h-10 items-center rounded-lg px-4 text-sm  transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:bg-slate-700 disabled:text-gray-200 justify-center"
      disabled={pending}
      aria-disabled={pending}
    >
      {children}
    </button>
  );
}
