import { within, userEvent } from "@storybook/test";
import Counter from "./Counter";
import ButtonCounter from "../ButtonCounter/ButtonCounter";

export default {
  title: "Counter/Page",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = () => {
  return <Counter />;
};

export const IncrementingByTwo = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: ButtonCounter });
    await userEvent.click(button, { delay: 200 });
    await userEvent.click(button, { delay: 200 });
  },
};
