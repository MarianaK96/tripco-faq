import { useState, useEffect } from "react";
import { FAQItem, Modal } from "src/components/common/molecules";
import { FAQSorting } from "src/components/molecules/FAQSorting";
import { useFaqStore } from "src/store";
import { InfoIcon } from "@phosphor-icons/react";
import { Button, Tooltip } from "../atoms";
import { Callout } from "../molecules";

export const DELETE_ALL = "delete_all" as const;
type DeletionOption = typeof DELETE_ALL;

interface FAQSectionProps {
  onDelete: (index: string | DeletionOption) => void;
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

  const noFaqs = sortedFaqs.length === 0;

  if (noFaqs) {
    return (
      <section>
        <h2 className="text-2xl mb-4 font-bold">Queries</h2>
        <Callout
          icon={
            <InfoIcon
              weight="duotone"
              className="text-yellow-400  rounded-full"
            />
          }
          children="Add some questions & answers using the form"
        />
      </section>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center mb-4 gap-2">
          <h2 className="text-2xl font-bold">Queries</h2>
          <Tooltip text="Your submitted questions & answers appear here.">
            <InfoIcon className="cursor-pointer" />
          </Tooltip>
        </div>

        {!noFaqs ? (
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
          message={
            deleteIndex === DELETE_ALL
              ? "Are you sure you want to delete all of your FAQs?"
              : "Are you sure you want to delete this FAQ?"
          }
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteIndex(null)}
        />
      )}
      {!noFaqs ? (
        <Button
          onClick={() => setDeleteIndex(DELETE_ALL)}
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white w-fit mx-auto px-8 mt-4"
        >
          Delete all
        </Button>
      ) : null}
    </section>
  );
};
