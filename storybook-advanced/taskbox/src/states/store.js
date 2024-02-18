import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const TaskBoxData = {
  tasks: [],
  status: "idle",
  error: null,
};

export const fetchTasks = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1"
  );
  const data = await response.json();
  const result = data.map((task) => ({
    id: `${task.id}`,
    title: task.title,
    state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
  }));
  return result;
});

const tasksSlice = createSlice({
  name: "taskBox",
  initialState: TaskBoxData,
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
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong";
        state.tasks = [];
      });
  },
});

export const { pinTask, archiveTask } = tasksSlice.actions;

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export default store;
