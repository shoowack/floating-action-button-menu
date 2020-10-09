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
      id="uploadFile"
      onClick={(e) => lol(e.target.id)}
    />
    <Fab.Item icon="fa fa-envelope" id="createInvite" />
    <Fab.Item icon="fa fa-download" id="downloadFile" />
  </Fab>,
  rootElement
);
