import React from "react";
import "../scss/ToDoTask.scss";

export default function ToDoTask({ id, task, finished, onDone, onDelete }) {
  const url = "http://localhost:3000/todos";

  // zmieniamy zadanie na zrobione/niezrobione
  const toggleTaskFinished = () => {
    if (typeof onDone === "function") {
      onDone(id);
    }
  };

  const deleteTask = (id, successCallback) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        if (typeof successCallback === "function") {
          successCallback();
        }
      })
      .catch((err) => console.log(err));
  };

  // usuwamy zadanie
  const handleDeleteTask = () => {
    deleteTask(id, () => {
      onDelete(id);
    });
  };

  return (
    <li className="ToDoTask" key={id}>
      <div className="taskDot" onClick={toggleTaskFinished}></div>
      {task}
      <div className="deleteTaskDot" onClick={handleDeleteTask}></div>
    </li>
  );
}
