import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <p>Text Value: <span>DUMMY VALUE</span></p>
        <Child />
      </div>
    );
  }
}

export default Parent
