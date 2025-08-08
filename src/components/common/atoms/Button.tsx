import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium ${className}`}
    >
      {children}
    </button>
  );
};
