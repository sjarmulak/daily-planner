import React from "react";
import "../scss/MainContent.scss";
import ToDoList from "./ToDoList";
import Weather from "./Weather";
import Notes from "./Notes";
import DateTime from "./DateTime";

export default function MainContent() {
  return (
    <div className="MainContent">
      <Weather />
      <ToDoList />
      <Notes />
      <DateTime />
    </div>
  );
}
