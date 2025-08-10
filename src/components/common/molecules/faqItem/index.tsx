import { useId, useState } from "react";
import { IconButton } from "src/components/common/atoms";
import { MinusIcon, PlusIcon, XIcon } from "@phosphor-icons/react";

interface FAQItemProps {
  question: string;
  answer: string;
  onDelete: () => void;
}

export const FAQItem = ({ question, answer, onDelete }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <div
      aria-labelledby={id}
      className="border-b border-gray-300 py-3 flex justify-between items-start"
    >
      <div className="flex-1">
        <h3 id={id} className="font-medium">
          {question}
        </h3>
        {isOpen && <p className="text-gray-600 mt-1">{answer}</p>}
      </div>
      <div className="flex space-x-2">
        <IconButton
          icon={isOpen ? <MinusIcon /> : <PlusIcon />}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Open FAQ"
          className="bg-gray-200 rounded hover:bg-gray-300"
        />
        <IconButton
          icon={<XIcon />}
          onClick={onDelete}
          aria-label="Delete FAQ"
          className="bg-red-200 text-red-700 rounded hover:bg-red-300"
        />
      </div>
    </div>
  );
};
