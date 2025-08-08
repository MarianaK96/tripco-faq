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
      <div className="bg-amber-100 pt-8 lg:w-1/2 lg:h-[90vh] px-4 max-w-2xl lg:max-w-full lg:px-8 rounded-lg m-8 shadow-2xl">
        <h1 className="text-3xl md:text-5xl font-bold w-fit">
          Frequently asked questions
        </h1>
        <FormSection onSubmit={addFAQ} />
      </div>
      <div className="lg:w-1/2 py-10 px-12 lg:px-8 max-w-2xl lg:max-w-full">
        <FAQSection onDelete={deleteFAQ} />
      </div>
    </div>
  );
};
