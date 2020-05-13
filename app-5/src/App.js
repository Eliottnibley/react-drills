import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg"} />
      </div>
    );
  }
}
