import { BookmarkSimpleIcon, IconProps } from "@phosphor-icons/react";

interface BookmarkProps extends IconProps {
  handleClick: () => void;
  isBookmarked?: boolean;
}
export const Bookmark = ({
  handleClick,
  isBookmarked = false,
  ...props
}: BookmarkProps) => {
  return (
    <button 
      onClick={handleClick}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      aria-pressed={isBookmarked}
      className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
    >
      <BookmarkSimpleIcon
        size={28}
        weight={isBookmarked ? "fill" : "regular"}
        className="hover:opacity-80"
        aria-hidden="true"
        {...props}
      />
    </button>
  );
};
