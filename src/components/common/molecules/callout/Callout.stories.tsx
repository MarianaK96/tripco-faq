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
