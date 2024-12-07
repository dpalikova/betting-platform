import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "../components/Logo/Logo";

const meta = {
  title: "Example/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    logoUrl: {
      control: "radio",
      options: [
        "/img/Logo_Grosvenor.png",
        "/img/Logo_Happy Spins.png",
        "/img/Logo_Hajper.png",
      ],
    },
    fill: {
      control: "radio",
      options: ["#03252B", "#43082F", "#123156"],
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoUrl: "s/img/Logo_Grosvenor.png",
    alt: "logo",
    fill: "#03252B",
  },
};
