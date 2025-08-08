import { ReactNode, useState, useRef, useEffect } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

type PositionType = "top" | "left" | "right";

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<PositionType>("top");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // tooltip is aware of container boundary
  useEffect(() => {
    if (visible && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const spaceOnRight = window.innerWidth - rect.right;
      const spaceOnBottom = window.innerHeight - rect.bottom;

      if (spaceOnBottom < 150) {
        setPosition("top");
        return;
      }

      if (spaceOnRight < 256) {
        setPosition("left");
        return;
      }
      setPosition("right");
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
              ${
                position === "right"
                  ? "left-full ml-2 bottom-1/2 transform translate-y-1/2"
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
