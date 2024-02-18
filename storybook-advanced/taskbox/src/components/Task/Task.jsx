import Proptypes from "prop-types";

export default function Task(props) {
  const { task, onArchiveTask, onPinTask } = props;
  const { id, title, state } = task;

  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          checked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() =>
            state === "TASK_INBOX" || state === "TASK_PINNED"
              ? onArchiveTask(id)
              : null
          }
        />
      </label>

      <label htmlFor="title" aria-label={title} className={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          type="button"
          aria-label={`pinTask-${id}`}
          onClick={() => onPinTask(id)}
          className="pin-button"
          id={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className="icon-star" />
        </button>
      )}
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
