import React, { Component, Fragment } from "react";
import Media from "react-media";
import "../scss/MainContent.scss";
import WidgetViewDesktop from "./WidgetViewDesktop";
import WidgetViewMobile from "./WidgetViewMobile";

// A <Media> component listens for matches to a CSS media query and renders based on whether the query matches or not.

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
