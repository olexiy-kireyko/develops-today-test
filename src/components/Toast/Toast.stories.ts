import type { Meta, StoryObj } from "@storybook/react-vite";

import Toast from "./Toast";

const meta = {
  component: Toast,
  title: "Toast",
  tags: ["autodocs"],

  excludeStories: /.*Data$/,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    text: "successed loading!",
    duration: 2000,
    closing: false,
  },
};

export const SuccessClosing: Story = {
  args: {
    type: "success",
    text: "successed loading!",
    duration: 2000,
    closing: true,
  },
};

export const Error: Story = {
  args: {
    type: "error",
    text: "errored loading!",
    duration: 4000,
    closing: false,
  },
};
