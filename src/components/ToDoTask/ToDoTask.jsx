import React from "react";
import "./ToDoTask.css";

const ToDoTask = (props) => {
  return (
    <div className="taskContainer">
      <div className="task">
        <span>{props.taskName}</span>
      </div>
      <button
        onClick={() => {
          props.deleteTaskFn(props.taskId);
        }}
        className="task-btn"
      >
        Remove
      </button>
    </div>
  );
};

export default ToDoTask;
