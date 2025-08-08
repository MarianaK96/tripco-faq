import { StateCreator } from "zustand";

export interface FaqState {
  faqs: IFaq[];
  searchQuery: string;
  addFaq: (faq: IFaq) => void;
  updateFaq: (id: string, updates: Partial<IFaq>) => void;
  removeFaq: (id: string) => void;
}

export const faqSlice: StateCreator<FaqState, [], [], FaqState> = (set) => ({
  faqs: [
    {
      id: "1234567",
      question: "What is your cancellation policy?",
      answer:
        "You can cancel within 7 days of your booking for a full refund. ",
      createdAt: "",
    },
  ],
  searchQuery: "",
  addFaq: (faq: IFaq) =>
    set((state) => ({
      faqs: [...state.faqs, faq],
    })),
  updateFaq: (id: string, updates: Partial<IFaq>) =>
    set((state) => ({
      faqs: state.faqs.map((faq) =>
        faq.id === id
          ? { ...faq, ...updates, updatedAt: new Date().toISOString() }
          : faq
      ),
    })),
  removeFaq: (id: string) =>
    set((state) => ({
      faqs: state.faqs.filter((faq) => faq.id !== id),
    })),
});
