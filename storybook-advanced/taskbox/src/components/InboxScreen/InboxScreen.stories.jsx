import InboxScreen from "./InboxScreen";

import { Provider } from "react-redux";
import store from "../../states/store";

import { rest } from "msw";
import { MockedState } from "../TaskList/TaskList.stories";

export default {
  title: "InboxScreen",
  component: InboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, ctx) => {
            return res(ctx.json(MockedState));
          }
        ),
      ],
    },
  },
};
export const Error = {};
