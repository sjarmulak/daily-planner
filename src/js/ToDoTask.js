import React from "react";
import "../scss/ToDoTask.scss";

export default function ToDoTask({ id, task, finished, onDone, onDelete }) {
  // zmieniamy zadanie na zrobione/niezrobione
  const toggleTaskFinished = () => {
    // if (typeof onDone === "function") {
    onDone(id);
    // }
  };

  // usuwamy zadanie
  const deleteTask = () => {
    // if (typeof onDelete === "function") {
    onDelete(id);
    // }
  };

  return (
    <li className="ToDoTask" key={id}>
      <div className="taskDot" onClick={toggleTaskFinished}></div>
      {task}
      <div className="deleteTaskDot" onClick={deleteTask}></div>
    </li>
  );
}
