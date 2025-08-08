import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon } from "@phosphor-icons/react";
import { Tooltip } from "src/components/common/atoms";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    text: "This is a helpful tooltip",
    children: <InfoIcon className="cursor-pointer text-blue-500" size={20} />,
  },
};

export const LongText: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children: <InfoIcon className="cursor-pointer text-blue-500" size={20} />,
  },
};
