import DateTime from "./DateTime";
import Notes from "./Notes";
import ToDoList from "./ToDoList";
import Weather from "./Weather";
import React from "react";
import "../scss/MainContent.scss";

export default function WidgetViewDesktop() {
  return (
    <div className="WidgetViewDesktop">
      <Weather />
      <DateTime />
      <ToDoList />
      <Notes />
    </div>
  );
}
