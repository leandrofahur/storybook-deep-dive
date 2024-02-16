import TaskList from "./TaskList";
import * as TaskStories from "../Task/Task.stories";

import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const MockedState = {
  tasks: [
    {
      ...TaskStories.Default.args.task,
      id: "1",
      title: "Task 1",
    },
    {
      ...TaskStories.Default.args.task,

      id: "2",
      title: "Task 2",
    },
    {
      ...TaskStories.Default.args.task,
      id: "3",
      title: "Task 3",
    },
    {
      ...TaskStories.Default.args.task,
      id: "4",
      title: "Task 4",
    },
    {
      ...TaskStories.Default.args.task,

      id: "5",
      title: "Task 5",
    },
  ],
  status: "idle",
  error: null,
};

const MockStore = ({ taskBoxState, children }) => (
  <Provider
    store={configureStore({
      reducer: createSlice({
        name: "taskBox",
        initialState: taskBoxState,
        reducers: {
          pinTask(state, action) {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
              task.state = "TASK_PINNED";
            }
          },
          archiveTask(state, action) {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
              task.state = "TASK_ARCHIVED";
            }
          },
        },
      }).reducer,
    })}
  >
    {children}
  </Provider>
);

export default {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story) => <MockStore taskBoxState={MockedState}>{story()}</MockStore>,
  ],
};

export const WithPinnedTasks = {
  decorators: [
    (story) => {
      // Directly use the MockedState to construct the pinnedTasks array
      const pinnedTasks = [
        ...MockedState.tasks,
        {
          ...TaskStories.Default.args.task,
          id: "6",
          title: "Task 6 (pinned)",
          state: "TASK_PINNED",
        },
      ];
      return (
        <MockStore taskBoxState={{ ...MockedState, tasks: pinnedTasks }}>
          {story()}
        </MockStore>
      );
    },
  ],
};

export const Loading = {
  decorators: [
    (story) => (
      <MockStore taskBoxState={{ ...MockedState, status: "loading" }}>
        {story()}
      </MockStore>
    ),
  ],
};

export const Empty = {
  decorators: [
    (story) => (
      <MockStore taskBoxState={{ tasks: [], status: "idle" }}>
        {story()}
      </MockStore>
    ),
  ],
};
