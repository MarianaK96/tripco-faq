import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "src/components/common/atoms/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    onClick: { action: "clicked" },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    className: "bg-blue-500 hover:bg-blue-700 text-white",
  },
};
