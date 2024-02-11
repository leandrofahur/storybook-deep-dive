import Button from "./Button";
import { VscSettings } from "react-icons/vsc";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The button has three different types",
      control: "select",
      options: ["contained", "outlined"],
    },
    size: {
      description: "The button has three different sizes",
      control: "select",
      options: ["small", "medium", "large"],
    },
    onClick: {
      description: "The button onClick function",
    },
    children: {
      description: "The button label or icon",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  size: "medium",
  children: <span>Button</span>,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  size: "medium",
  children: <span>Button</span>,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "contained",
  size: "medium",
  children: <VscSettings />,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  variant: "contained",
  size: "medium",
  children: (
    <>
      <VscSettings />
      <span>Settings</span>
    </>
  ),
};

export const IconRight = Template.bind({});
IconRight.args = {
  variant: "contained",
  size: "medium",
  children: (
    <>
      <span>Settings</span>
      <VscSettings />
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  variant: "contained",
  size: "small",
  children: <span>Button</span>,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "contained",
  size: "medium",
  children: <span>Button</span>,
};

export const Large = Template.bind({});
Large.args = {
  variant: "contained",
  size: "large",
  children: <span>Button</span>,
};
