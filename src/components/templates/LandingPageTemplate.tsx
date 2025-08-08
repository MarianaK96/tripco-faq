import { useState } from "react";

import { FormSection, FAQSection } from "src/components/common/organisms";

interface FAQ {
  question: string;
  answer: string;
}

export const LandingPageTemplate = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel within 7 days of your booking for a full refund. ",
    },
  ]);

  const addFAQ = (faq: FAQ) => {
    setFaqs([...faqs, faq]);
  };

  const deleteFAQ = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="bg-blue-100 pt-8">
        <h1 className="text-5xl font-bold w-fit mx-auto">
          Frequently Asked Questions
        </h1>
        <FormSection onSubmit={addFAQ} />
      </div>

      <FAQSection faqs={faqs} onDelete={deleteFAQ} />
    </div>
  );
};
