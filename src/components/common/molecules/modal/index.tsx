import { useId } from "react";
import { Button } from "src/components/common/atoms";

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal = ({ message, onConfirm, onCancel }: ModalProps) => {
  const id = useId();

  return (
    <div
      role="alertdialog"
      aria-labelledby={id}
      aria-modal="true"
      className="fixed inset-0 backdrop-blur-xs flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <p id={id} className="mb-4">
          {message}
        </p>
        <div className="flex justify-end space-x-3">
          <Button className="bg-gray-300" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="bg-red-500 text-white" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
