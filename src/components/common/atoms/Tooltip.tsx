import { ReactNode, useState, useRef, useEffect } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<"top" | "left">("top");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // tooltip is aware of container boundary
  useEffect(() => {
    if (visible && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const spaceOnRight = window.innerWidth - rect.right;
      const spaceOnTop = rect.top;

      if (spaceOnTop < 150) {
        setPosition("left");
        return;
      }

      if (spaceOnRight < 150) {
        setPosition("left");
        return;
      }
      setPosition("top");
    }
  }, [visible]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 px-3 py-1 text-sm text-white bg-black rounded shadow-lg text-wrap max-w-3xs w-max
            ${
              position === "top"
                ? "bottom-full mb-2 left-1/2 transform -translate-x-1/2"
                : ""
            }
            ${
              position === "left"
                ? "right-full mr-2 top-1/2 transform -translate-y-1/2"
                : ""
            }
          `}
        >
          <span className="w-full">{text}</span>
        </div>
      )}
    </div>
  );
};
