import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  "aria-label"?: string;
}
export const Input = ({ placeholder, value, onChange, type, "aria-label": ariaLabel }: InputProps) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || ""}
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
};
