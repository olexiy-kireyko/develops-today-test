import type { Meta, StoryObj } from "@storybook/react-vite";

import SidebarMenu from "./SidebarMenu";

const meta = {
  component: SidebarMenu,
  title: "SidebarMenu",
  tags: ["autodocs"],

  excludeStories: /.*Data$/,
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    list: [
      { id: "ddd", name: "ff", itemChildren: ["1", "2", "3", "4"] },
      { id: "add", name: "aaaff", itemChildren: ["1", "2", "3", "4", "5"] },
    ],
    expandedId: "none",
    isShowMenu: true,
  },
};

export const MenuExpanded: Story = {
  args: {
    list: [
      { id: "ddd", name: "ff", itemChildren: ["1", "2", "3", "4"] },
      { id: "add", name: "aaaff", itemChildren: ["1", "2", "3", "4", "5"] },
    ],
    expandedId: "ddd",
    isShowMenu: true,
  },
};

export const MenuHided: Story = {
  args: {
    list: [
      { id: "ddd", name: "ff", itemChildren: ["1", "2", "3", "4"] },
      { id: "add", name: "aaaff", itemChildren: ["1", "2", "3", "4", "5"] },
    ],
    expandedId: "ddd",
    isShowMenu: false,
  },
};
