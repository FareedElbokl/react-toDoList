import React, { useState } from "react";
import "./ToDoContainer.css";
import ToDoTask from "../ToDoTask/ToDoTask";

const ToDoContainer = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function addTask() {
    if (inputText != "") {
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          { taskName: inputText, taskId: tasks.length + 1 },
        ];
      });
    }

    setInputText("");
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.taskId != id;
      });
    });
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  const styleIfEmpty = { backgroundColor: "#d4d4ce" };
  return (
    <div className="ToDo-container">
      <h1>React To-Do List</h1>
      <div className="input-container">
        <input
          className="task-input"
          onChange={handleInputChange}
          type="text"
          value={inputText}
          placeholder="Add Task Here"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={deleteAllTasks}>Remove All</button>
      </div>
      <div
        style={tasks.length == 0 ? styleIfEmpty : null}
        className="task-container"
      >
        {tasks.map((task) => {
          return (
            <ToDoTask
              key={task.taskId}
              taskId={task.taskId}
              taskName={task.taskName}
              deleteTaskFn={deleteTask}
            ></ToDoTask>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoContainer;
