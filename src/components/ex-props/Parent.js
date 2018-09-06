import React, { Component } from "react";
import { Input } from 'antd'
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <Input />
        <Child />
      </div>
    );
  }
}

export default Parent
