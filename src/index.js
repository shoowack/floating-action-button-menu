import React from "react";
import ReactDOM from "react-dom";
import Fab from "./Fab";

const lol = (value) => {
  console.log(value);
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fab>
    <Fab.Item
      icon="fa fa-file"
      id="createInvite"
      onClick={(e) => lol(e.target.id)}
    />
    <Fab.Item icon="fa fa-envelope" id="createInvite1" />
    <Fab.Item icon="fa fa-download" id="createInvite3" />
  </Fab>,
  rootElement
);
