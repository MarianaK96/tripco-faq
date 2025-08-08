import { ChangeEvent } from "react";
import { IQuestionAnswer } from "../organisms/FormSection";

interface InputProps {
  content: IQuestionAnswer;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  onChange,
  placeholder,
  content,
  type = "text",
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        type={type}
        value={content.value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-md w-full focus:outline-amber-500"
      />
      {content.error ? (
        <p className="text-xs text-red-500 ml-1 mt-1">{content.error}</p>
      ) : null}
    </div>
  );
};
