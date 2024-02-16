import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2018, 0, 1, 9, 0),
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
