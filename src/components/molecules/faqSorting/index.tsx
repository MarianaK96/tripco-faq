import { SortAscendingIcon, SortDescendingIcon } from "@phosphor-icons/react";
import { IconButton, Tooltip } from "src/components/common/atoms";

interface FAQSortingProps {
  isAscending: boolean;
  onClick: () => void;
}

export const FAQSorting = ({ isAscending, onClick }: FAQSortingProps) => {
  return (
    <Tooltip
      text={`Sorting alphabetically in ${
        isAscending ? "ascending" : "descending"
      } order`}
    >
      <IconButton
        icon={isAscending ? <SortDescendingIcon /> : <SortAscendingIcon />}
        onClick={onClick}
        aria-label={`Sort alphabetically in ${
          isAscending ? "ascending" : "descending"
        } order`}
        className="bg-gray-200 hover:bg-gray-300 rounded"
      />
    </Tooltip>
  );
};
