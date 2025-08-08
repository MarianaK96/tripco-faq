import { useState } from "react";
import { FAQItem } from "../molecules/FAQItem";
import { Modal } from "../molecules/Modal";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  onDelete: (index: number) => void;
}

export const FAQSection = ({ faqs, onDelete }: FAQSectionProps) => {
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      setDeleteIndex(null);
    }
  };

  return (
    <section className="py-10 px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">FAQs</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            onDelete={() => setDeleteIndex(index)}
          />
        ))}
      </div>
      {deleteIndex !== null && (
        <Modal
          message="Are you sure you want to delete this FAQ?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteIndex(null)}
        />
      )}
    </section>
  );
};
