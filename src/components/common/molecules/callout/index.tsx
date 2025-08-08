import { ReactNode } from "react";

interface CalloutProps {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Callout = ({ icon, children, className = "" }: CalloutProps) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg shadow-md bg-white ${className}`}
    >
      <div className="flex-shrink-0 text-lg">{icon}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
