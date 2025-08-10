import { ChangeEvent, useId } from "react";
import { IQuestionAnswer } from "src/components/common/organisms";

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
  const id = useId();
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        value={content.value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className="border border-gray-300 p-2 rounded-md w-full focus:outline-amber-500"
      />
      {content.error ? (
        <p role="alert" className="text-xs text-red-500 ml-1 mt-1">
          {content.error}
        </p>
      ) : null}
    </div>
  );
};
