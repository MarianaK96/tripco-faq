import { useState } from "react";
import { FAQItem } from "../molecules/FAQItem";
import { Modal } from "../molecules/Modal";

interface FAQSectionProps {
  faqs: IFaq[];
  onDelete: (index: string) => void;
}

export const FAQSection = ({ faqs, onDelete }: FAQSectionProps) => {
  const [deleteIndex, setDeleteIndex] = useState<string | null>(null);

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
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            onDelete={() => setDeleteIndex(faq.id)}
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
