import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon, QuestionIcon, WarningIcon } from "@phosphor-icons/react";
import { Button, Tooltip } from "src/components/common/atoms";

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

export const WithButton: Story = {
  args: {
    text: "Click this button to perform an action",
    children: (
      <Button className="bg-blue-500 hover:bg-blue-700 text-white">
        Hover me
      </Button>
    ),
  },
};

export const LongText: Story = {
  args: {
    text: "This is a much longer tooltip text that demonstrates how the tooltip handles longer content and wraps appropriately.",
    children: (
      <QuestionIcon className="cursor-pointer text-gray-500" size={20} />
    ),
  },
};

export const Warning: Story = {
  args: {
    text: "Warning: This action cannot be undone",
    children: (
      <WarningIcon className="cursor-pointer text-yellow-500" size={20} />
    ),
  },
};

export const WithText: Story = {
  args: {
    text: "Your submitted questions & answers appear here.",
    children: (
      <span className="underline cursor-help text-blue-600">Queries</span>
    ),
  },
};

export const PositionTest: Story = {
  args: {
    text: "This tooltip will adjust its position based on available space",
    children: <InfoIcon className="cursor-pointer text-blue-500" size={20} />,
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="flex justify-start">
            <Story />
          </div>
          <div className="flex justify-center">
            <Story />
          </div>
          <div className="flex justify-end">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};
