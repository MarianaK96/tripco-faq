import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bookmark } from "./index";

const meta = {
  title: "common/atoms/Bookmark",
  component: Bookmark,
} satisfies Meta<typeof Bookmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleClick: () => {},
  },
};
