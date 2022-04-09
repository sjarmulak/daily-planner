import React, { Component, Fragment } from "react";
import Media from "react-media";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import "../scss/MainContent.scss";
import ToDoList from "./ToDoList";
import Weather from "./Weather";
import Notes from "./Notes";
import DateTime from "./DateTime";
import Navigation from "./Navigation";
import WidgetViewDesktop from "./WidgetViewDesktop";
import WidgetViewMobile from "./WidgetViewMobile";

export default function MainContent() {
  return (
    <div className="MainContent">
      <Media
        queries={{
          mobile: { maxWidth: 999 },
          desktop: { minWidth: 1000 },
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.mobile && <WidgetViewMobile />}
            {matches.desktop && <WidgetViewDesktop />}
          </Fragment>
        )}
      </Media>
    </div>
  );
}
