import { useState } from "react";
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

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      setDeleteIndex(null);
    }
  };

  const handleSort = () => {
    console.log("sorting");
    const sorted = [...sortedFaqs].sort((a, b) => {
      return isAscending
        ? a.question.localeCompare(b.question)
        : b.question.localeCompare(a.question);
    });

    console.log("sorted:", sorted);
    setSortedFaqs(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <section className="py-10 px-4 max-w-2xl lg:mx-0 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
        <FAQSorting isAscending={isAscending} onClick={handleSort} />
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
