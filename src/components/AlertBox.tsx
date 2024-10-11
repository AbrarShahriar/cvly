import React, { ReactElement, ReactHTMLElement } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

interface AlertBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "warning" | "error" | "default";
  message: string;
  className: string;
}

export default function AlertBox({
  variant = "default",
  message = "",
  className = "",
  ...props
}: AlertBoxProps) {
  const variantClasses = {
    warning: "bg-yellow-100 border-yellow-400 text-yellow-800",
    error: "bg-red-100 border-red-400 text-red-800",
    default: "",
  };
  return (
    <Alert
      className={`${variantClasses[variant]} ${className} `}
      variant="default"
      {...props}
    >
      <TiWarningOutline
        color={
          ((variant == "warning" && "#c7a10b") ||
            (variant == "error" && "#991b1b") ||
            (variant == "default" && "white")) as string
        }
        size={20}
      />
      <AlertTitle>{variant == "warning" ? "Warning" : "Notice"}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
