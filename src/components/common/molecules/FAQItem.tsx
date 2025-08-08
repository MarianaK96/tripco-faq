import { useState } from "react";
import { IconButton } from "../atoms/IconButton";
import { MinusIcon, PlusIcon, XIcon } from "@phosphor-icons/react";

interface FAQItemProps {
  question: string;
  answer: string;
  onDelete: () => void;
}

export const FAQItem = ({ question, answer, onDelete }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-3 flex justify-between items-start">
      <div className="flex-1">
        <p className="font-medium">{question}</p>
        {isOpen && <p className="text-gray-600 mt-1">{answer}</p>}
      </div>
      <div className="flex space-x-2">
        <IconButton
          icon={isOpen ? <MinusIcon /> : <PlusIcon />}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-200 rounded hover:bg-gray-300"
        />
        <IconButton
          icon={<XIcon />}
          onClick={onDelete}
          className="bg-red-200 text-red-700 rounded hover:bg-red-300"
        />
      </div>
    </div>
  );
};
