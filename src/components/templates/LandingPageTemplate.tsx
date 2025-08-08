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
    <div className="lg:flex">
      <div className="bg-amber-100 pt-8 lg:w-1/2 lg:h-screen lg:px-4">
        <h1 className="text-3xl md:text-5xl font-bold w-fit mx-auto">
          Frequently Asked Questions
        </h1>
        <FormSection onSubmit={addFAQ} />
      </div>
      <div className="lg:w-1/2 lg:px-4">
        <FAQSection onDelete={deleteFAQ} />
      </div>
    </div>
  );
};
