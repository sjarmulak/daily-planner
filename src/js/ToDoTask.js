import React, { useState, useEffect } from "react";
import "../scss/ToDoTask.scss";

export default function ToDoTask({ id, task, ifFinished, onDone, onDelete }) {
  const url = "http://localhost:3000/todos";

  // zmieniamy zadanie na zrobione/niezrobione
  const updateTask = (id, task, successCallback) => {
    fetch(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(task),
    })
      .then((r) => r.json())
      .then((data) => {
        if (typeof successCallback === "function") {
          successCallback(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleTaskFinished = () => {
    const toggledTask = {
      id,
      task,
      finished: !ifFinished,
    };

    updateTask(id, toggledTask, () => {
      onDone(toggledTask);
    });
  };

  // usuwamy zadanie
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

  const handleDeleteTask = () => {
    deleteTask(id, () => {
      onDelete(id);
    });
  };

  return (
    <li className="ToDoTask" key={id}>
      <div className="taskContainer">
        <div className="taskDot" onClick={toggleTaskFinished}></div>
        <p>{task}</p>
        <div className="deleteTaskDot" onClick={handleDeleteTask}></div>
      </div>
    </li>
  );
}
