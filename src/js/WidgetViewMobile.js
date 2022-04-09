import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "../scss/MainContent.scss";
import "../scss/WidgetViewMobile.scss";
import ToDoList from "./ToDoList";
import Weather from "./Weather";
import Notes from "./Notes";
import DateTime from "./DateTime";
import Navigation from "./Navigation";

export default function WidgetViewMobile() {
  return (
    <div className="WidgetViewMobile">
      <Router>
        <>
          <div className="app-content widget-view-mobile">
            <Navigation />
            <Routes>
              <Route path="/weather" element={<Weather />} className="widget" />
              <Route
                path="/datetime"
                element={<DateTime />}
                className="widget"
              />
              <Route
                path="/todolist"
                element={<ToDoList />}
                className="widget"
              />
              <Route path="/notes" element={<Notes />} className="widget" />
            </Routes>
          </div>
        </>
      </Router>
    </div>
  );
}
