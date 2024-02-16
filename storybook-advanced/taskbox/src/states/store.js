import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultTasks = [
  { id: 1, title: "Task 1", state: "TASK_INBOX" },
  { id: 2, title: "Task 2", state: "TASK_INBOX" },
  { id: 3, title: "Task 3", state: "TASK_INBOX" },
  { id: 4, title: "Task 4", state: "TASK_INBOX" },
  { id: 5, title: "Task 5", state: "TASK_INBOX" },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

const tasksSlice = createSlice({
  name: "taskBox",
  initialState: TaskBoxData,
  reducers: {
    pinTask(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.state = "TASK_PINNED";
      }
    },
    archiveTask(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.state = "TASK_ARCHIVED";
      }
    },
  },
});

export const { pinTask, archiveTask } = tasksSlice.actions;

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export default store;
