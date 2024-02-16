import TaskList from "./TaskList";
import Task from "../Task/Task";

export default {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    tasks: [
      {
        id: "1",
        title: "Test Task",
        state: "TASK_INBOX",
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
      {
        id: "2",
        title: "Another Test Task",
        state: "TASK_INBOX",
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
      {
        id: "3",
        title: "A Task",
        state: "TASK_INBOX",
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
      {
        id: "4",
        title: "Task",
        state: "TASK_INBOX",
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
      {
        id: "5",
        title: "Test",
        state: "TASK_INBOX",
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      {
        id: "6",
        title: "Test Task (pinned)",
        state: "TASK_PINNED",
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    tasks: [],
  },
};
