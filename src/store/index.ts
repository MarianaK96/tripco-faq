import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { faqSlice, FaqState } from "./faq.store";

export const useFaqStore = create<FaqState>()(
  persist(
    (...a) => ({
      ...faqSlice(...a),
    }),
    {
      name: 'faq-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
