import {
  FormSection,
  FAQSection,
  DELETE_ALL,
} from "src/components/common/organisms";
import { useFaqStore } from "src/store";

export const LandingPageTemplate = () => {
  const addFaq = useFaqStore().addFaq;
  const removeFaq = useFaqStore().removeFaq;
  const removeAllFaqs = useFaqStore().removeAllFaqs;

  const addFAQ = (faq: IFaq) => {
    addFaq(faq);
  };

  const deleteFAQ = (id: string) => {
    if (id === DELETE_ALL) {
      removeAllFaqs();
      return;
    }
    removeFaq(id);
  };

  return (
    <main className="lg:mx-auto max-w-[85rem] lg:flex">
      <section
        aria-label="Submit a question & answer form"
        className="bg-amber-100 pt-8 lg:w-1/2 lg:h-[90vh] px-4 max-w-2xl md:max-w-full lg:max-w-full lg:px-8 rounded-lg m-8 shadow-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold w-fit">
          Frequently asked questions
        </h1>
        <FormSection onSubmit={addFAQ} />
      </section>
      <section
        aria-label="Frequently asked questions list"
        className="lg:w-1/2 py-10 px-12 lg:px-8 max-w-2xl md:max-w-full"
      >
        <FAQSection onDelete={deleteFAQ} />
      </section>
    </main>
  );
};
