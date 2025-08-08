import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface FormSectionProps {
  onSubmit: (faq: IFaq) => void;
}

export const FormSection = ({ onSubmit }: FormSectionProps) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // @TODO
  // how often should this rerender

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    onSubmit({
      question,
      answer,
      createdAt: new Date().toISOString(),
      id: uuidv4(),
    });
    setQuestion("");
    setAnswer("");
  };

  return (
    <section className="">
      <div className="py-10 px-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Submit a Question</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center"
        >
          <Input
            value={question}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuestion(e.target.value)
            }
            placeholder="Enter your question"
          />
          <Input
            value={answer}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAnswer(e.target.value)
            }
            placeholder="Enter the answer"
          />
          <Button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white w-fit px-8 mx-auto"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
