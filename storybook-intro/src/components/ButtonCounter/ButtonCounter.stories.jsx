import ButtonCounter from "./ButtonCounter";

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "The background color of the button in HEX #RRGGBB format",
      table: {
        defaultValue: {
          summary: "#EFEFEF",
        },
      },
    },
    label: {
      description: "The label of the button",
      // table: {
      //   defaultValue: {
      //     summary: "Button",
      //   },
      // },
    },
    size: {
      description: "The size of the button can be:",
      table: {
        defaultValue: {
          summary: "large",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "This is the large button",
      },
    },
  },
};

export const Medium = {
  args: {
    size: "medium",
    label: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "This is the medium button",
      },
    },
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "This is the small button",
      },
    },
  },
};
