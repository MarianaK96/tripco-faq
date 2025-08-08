import { useState, useEffect } from "react";
import { FAQItem } from "../molecules/FAQItem";
import { Modal } from "../molecules/Modal";
import { FAQSorting } from "src/components/molecules/FAQSorting";
import { useFaqStore } from "src/store";

interface FAQSectionProps {
  onDelete: (index: string) => void;
}

export const FAQSection = ({ onDelete }: FAQSectionProps) => {
  const faqStore = useFaqStore();
  const [deleteIndex, setDeleteIndex] = useState<string | null>(null);
  const [isAscending, setIsAscending] = useState(true);
  const [sortedFaqs, setSortedFaqs] = useState(faqStore.faqs);

  useEffect(() => {
    setSortedFaqs(faqStore.faqs);
  }, [faqStore.faqs]);

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      setDeleteIndex(null);
    }
  };

  const handleSort = () => {
    const sorted = [...sortedFaqs].sort((a, b) => {
      return isAscending
        ? a.question.localeCompare(b.question)
        : b.question.localeCompare(a.question);
    });

    setSortedFaqs(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <section className="">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold mb-6">Queries</h2>
        {sortedFaqs.length > 0 ? (
          <FAQSorting isAscending={isAscending} onClick={handleSort} />
        ) : null}
      </div>

      <div className="space-y-3">
        {sortedFaqs.map((faq) => (
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
