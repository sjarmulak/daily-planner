import React, { useState, useEffect } from "react";
import ToDoTask from "./ToDoTask";
import AddNewTask from "./AddNewTask";
import "../scss/ToDoList.scss";

const url = "http://localhost:3000/todos";

export default function ToDoList() {
  const url = "http://localhost:3000/todos";
  const [todoList, setTodoList] = useState(false);

  // ściągamy naszą listę todo
  const getTodos = (successCallback) => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (typeof successCallback === "function") {
          successCallback(data);
        }
      })
      .catch((err) => console.log(err));
  };

  // uaktualniamy listę todo przy renderze
  useEffect(() => {
    getTodos(setTodoList);
  }, []);

  // co się dzieje po "odhaczeniu" zadania
  const handleTaskDone = () => {
    getTodos(setTodoList);
  };

  // usuwamy całkowicie zadanie z listy
  const handleTaskDeleted = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  };

  // po dodaniu nowego zadania uaktualniamy listę
  const handleTaskAdded = (task) => {
    setTodoList((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div className="ToDoList">
      <ul className="notYetDone">
        <span>to do:</span>
        {todoList ? (
          todoList.map(
            ({ id, task, finished }) =>
              !finished && (
                <ToDoTask
                  key={id}
                  id={id}
                  task={task}
                  ifFinished={finished}
                  onDone={handleTaskDone}
                  onDelete={handleTaskDeleted}
                />
              )
          )
        ) : (
          <p>loading list...</p>
        )}
        <AddNewTask onAdded={handleTaskAdded} />
      </ul>

      <ul className="done">
        {todoList
          ? todoList.filter((t) => t.finished === true).length > 0 && (
              <span>done:</span>
            )
          : null}
        {todoList ? (
          todoList.map(
            ({ id, task, finished }) =>
              finished && (
                <ToDoTask
                  key={id}
                  id={id}
                  task={task}
                  ifFinished={finished}
                  onDone={handleTaskDone}
                  onDelete={handleTaskDeleted}
                />
              )
          )
        ) : (
          <p>loading list...</p>
        )}
      </ul>
    </div>
  );
}
