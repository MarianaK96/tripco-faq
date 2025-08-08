import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "src/components/common/molecules";
import {
  InfoIcon,
  ExclamationMarkIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@phosphor-icons/react";

const meta: Meta<typeof Callout> = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    icon: <InfoIcon className="text-blue-500" size={24} />,
    children: "This is an informational callout with helpful information.",
  },
};

export const Warning: Story = {
  args: {
    icon: <ExclamationMarkIcon className="text-yellow-500" size={24} />,
    children:
      "This is a warning callout that alerts users to important information.",
  },
};

export const Success: Story = {
  args: {
    icon: <CheckCircleIcon className="text-green-500" size={24} />,
    children: "This is a success callout that confirms a positive action.",
  },
};

export const Error: Story = {
  args: {
    icon: <WarningIcon className="text-red-500" size={24} />,
    children: "This is an error callout that indicates something went wrong.",
  },
};

export const CustomStyling: Story = {
  args: {
    icon: <InfoIcon className="text-purple-500" size={24} />,
    children: "This callout has custom styling applied.",
    className: "border-l-4 border-purple-500 bg-purple-50",
  },
};

export const LongContent: Story = {
  args: {
    icon: <InfoIcon className="text-blue-500" size={24} />,
    children: (
      <div>
        <p className="font-semibold mb-2">This is a longer callout</p>
        <p>
          It contains multiple paragraphs of text to demonstrate how the
          component handles longer content. The icon stays aligned to the top
          while the text wraps naturally.
        </p>
      </div>
    ),
  },
};
