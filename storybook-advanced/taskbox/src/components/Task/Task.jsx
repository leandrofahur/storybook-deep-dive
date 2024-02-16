import Proptypes from "prop-types";
import "./Task.module.css";

export default function Task(props) {
  const { task, onArchiveTask, onPinTask } = props;

  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={task.title}>
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="title"
        />
      </label>
    </div>
  );
}

Task.propTypes = {
  task: Proptypes.shape({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    state: Proptypes.string.isRequired,
  }),
  onArchiveTask: Proptypes.func,
  onPinTask: Proptypes.func,
};
