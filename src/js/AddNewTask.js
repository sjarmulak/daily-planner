import React, { useEffect, useState } from "react";
import "../scss/AddNewTask.scss";

const url = "http://localhost:3000/todos";

export default function AddNewTask({ onAdded }) {
  const [taskDescription, setTaskDescription] = useState(""); // treść nowego zadania todo
  const [inputValue, setInputValue] = useState("");

  const createTask = (task, successCallback) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
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

  useEffect(() => {
    console.log("Reload");
  }, [taskDescription]);

  const save = (e) => {
    e.preventDefault();

    const newTask = {
      task: taskDescription,
      finished: false,
    };

    createTask(newTask, onAdded);

    // fetch(url, {
    //   method: "POST", // dodajemy nasze nowe zadania do db
    //   body: JSON.stringify(newTask),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log("Task added");
    //       return res.json();
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     // getTodos();
    //   })
    //   .catch((err) => {
    //     throw new Error(err);
    //   });
  };

  const handleTaskAdded = () => {
    if (typeof onDone === "function") {
      onAdded();
    }
    setInputValue("");
  };

  return (
    <form onSubmit={save} className="AddNewTask">
      <input
        type="text"
        placeholder="add new task..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setTaskDescription(e.target.value);
        }}
      />

      <button onClick={handleTaskAdded}></button>
    </form>
  );
}
