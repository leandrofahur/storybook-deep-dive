import Button from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      description: "The button may or may not have a label",
    },
    variant: {
      description: "The button has three different types",
      control: "select",
      options: ["contained", "outlined", "rounded"],
    },
    size: {
      description: "The button has three different sizes",
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: "Button",
  variant: "contained",
};
