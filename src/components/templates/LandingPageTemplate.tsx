import { useState } from "react";

import { FormSection, FAQSection } from "src/components/common/organisms";

interface FAQ {
  question: string;
  answer: string;
}

export const LandingPageTemplate = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "What is your return policy?",
      answer: "You can return items within 30 days.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide.",
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
