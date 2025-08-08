import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { InfoIcon } from "@phosphor-icons/react";
import { Tooltip, Input, Button } from "src/components/common/atoms";
import { DelayCheckbox } from "src/components/molecules";

interface FormSectionProps {
  onSubmit: (faq: IFaq) => void;
}

export interface IQuestionAnswer {
  value: string;
  error: string | undefined;
}

export const FormSection = ({ onSubmit }: FormSectionProps) => {
  const [question, setQuestion] = useState<IQuestionAnswer>({
    value: "",
    error: undefined,
  });
  const [answer, setAnswer] = useState<IQuestionAnswer>({
    value: "",
    error: undefined,
  });
  const [checkboxSelected, setCheckboxSelected] = useState(false);

  const clearInputs = () => {
    setQuestion({ value: "", error: undefined });
    setAnswer({ value: "", error: undefined });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!question.value.trim()) {
      setQuestion({ ...question, error: "You must add a question" });
      return;
    }
    if (!answer.value.trim()) {
      setAnswer({ ...answer, error: "You must add an answer" });
      return;
    }
    if (checkboxSelected) {
      setTimeout(() => {
        onSubmit({
          question: question.value,
          answer: answer.value,
          createdAt: new Date().toISOString(),
          id: uuidv4(),
        });
        clearInputs();
      }, 5000);

      return;
    }
    onSubmit({
      question: question.value,
      answer: answer.value,
      createdAt: new Date().toISOString(),
      id: uuidv4(),
    });
    clearInputs();
  };

  return (
    <section>
      <div className="py-10">
        <div className="flex items-center mb-4 gap-2">
          <h2 className="text-2xl font-bold">Submit a Question</h2>
          <Tooltip text="Enter a question & answer, and it will be added to your FAQ section">
            <InfoIcon className="cursor-pointer" />
          </Tooltip>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col ">
          <Input
            content={question}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuestion({ error: undefined, value: e.target.value })
            }
            placeholder="Enter your question"
          />
          <Input
            content={answer}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAnswer({ error: undefined, value: e.target.value })
            }
            placeholder="Enter the answer"
          />
          <div className="flex w-full justify-between">
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white w-fit px-8 "
            >
              Submit
            </Button>{" "}
            <DelayCheckbox
              onClick={() => setCheckboxSelected((prev) => !prev)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
