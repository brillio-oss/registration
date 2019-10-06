import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

require("@rails/ujs").start();
require("@rails/activestorage").start();
require("channels");

const componentRequireContext = require.context("components", true);
const ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
