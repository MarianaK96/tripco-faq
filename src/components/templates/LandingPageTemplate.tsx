import { FormSection, FAQSection } from "src/components/common/organisms";
import { useFaqStore } from "src/store";

export const LandingPageTemplate = () => {
  const faqStore = useFaqStore();

  const addFAQ = (faq: IFaq) => {
    faqStore.addFaq(faq);
  };

  const deleteFAQ = (id: string) => {
    faqStore.removeFaq(id);
  };

  return (
    <div>
      <div className="bg-blue-100 pt-8">
        <h1 className="text-5xl font-bold w-fit mx-auto">
          Frequently Asked Questions
        </h1>
        <FormSection onSubmit={addFAQ} />
      </div>

      <FAQSection faqs={faqStore.faqs} onDelete={deleteFAQ} />
    </div>
  );
};
