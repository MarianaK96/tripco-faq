import { ReactNode, useState, useRef, useEffect, useId } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

type PositionType = "top" | "left" | "right";

const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<PositionType>("top");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  // close on outside click
  // needed for touchscreen devices
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // tooltip is aware of container boundary and adjusts position
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
      onMouseEnter={!isTouch ? () => setVisible(true) : undefined}
      onMouseLeave={!isTouch ? () => setVisible(false) : undefined}
      onClick={isTouch ? () => setVisible((v) => !v) : undefined}
      aria-describedby={id}
    >
      {children}
      {visible && (
        <div
          id={id}
          role="tooltip"
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
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};
