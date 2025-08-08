import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating } from "./index";

const meta = {
  title: "common/atoms/Rating",
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    score: 3,
  },
};
