import type { Meta, StoryObj } from "@storybook/react-vite";

// import { fn } from "storybook/test";

import Input from "./Input";

// export const ActionsData = {
//   handleShowPassword: fn(),
//   handleClearText: fn(),
// };

const meta = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],

  excludeStories: /.*Data$/,
  //   args: {
  //     ...ActionsData,
  //   },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextClearable: Story = {
  args: {
    type: "text",
    clearable: true,
    passwordVisibility: false,
  },
};

export const Text: Story = {
  args: {
    type: "text",
    clearable: false,
    passwordVisibility: false,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    clearable: false,
    passwordVisibility: false,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    clearable: false,
    passwordVisibility: false,
  },
};

export const PasswordShow: Story = {
  args: {
    type: "password",
    clearable: false,
    passwordVisibility: true,
  },
};
