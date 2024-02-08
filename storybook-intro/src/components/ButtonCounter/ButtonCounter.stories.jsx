import ButtonCounter from "./ButtonCounter";

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Medium = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
