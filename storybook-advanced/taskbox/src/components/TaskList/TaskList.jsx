import Task from "../Task/Task";

import { useDispatch, useSelector } from "react-redux";
import { archiveTask, pinTask } from "../../states/tasksSlice";

export default function TaskList() {
  const tasks = useSelector((state) => {
    // object derived of the Task component to be used in the TaskList component
    // sort tasks by state
    // pinned tasks first
    // then the rest
    const tasksInOrder = [
      ...state.taskBox.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...state.taskBox.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );

    return filteredTasks;
  });

  const dispatch = useDispatch();

  const onPinTask = (id) => {
    dispatch(pinTask(id));
  };

  const onArchiveTask = (id) => {
    dispatch(archiveTask(id));
  };

  const { status } = useSelector((state) => state.taskBox.status);

  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (status === "loading") {
    return (
      <div className="list-items" key={"loading"} data-testid="loading">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(id) => onPinTask(id)}
          onArchiveTask={(id) => onArchiveTask(id)}
        />
      ))}
    </div>
  );
}
