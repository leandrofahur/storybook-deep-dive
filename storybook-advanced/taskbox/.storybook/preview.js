import { initialize, mswDecorator } from "msw-storybook-addon";

import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    decorators: [mswDecorator],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
