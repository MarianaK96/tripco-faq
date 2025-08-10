import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  className?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}

export const IconButton = ({
  icon,
  onClick,
  className = "",
  ...props
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-3 shrink-0 ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
