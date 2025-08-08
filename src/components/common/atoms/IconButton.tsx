import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

export const IconButton = ({
  icon,
  onClick,
  className = "",
}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={`py-2 px-3 shrink-0 ${className}`}>
      {icon}
    </button>
  );
};
