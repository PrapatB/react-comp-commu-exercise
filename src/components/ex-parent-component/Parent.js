import React, { Component } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    md: { span: 18 },
  },
};

class Parent extends Component {
  render() {
    return (
      <div>  
        <ChildA formItemLayout={formItemLayout}/>
        <ChildB formItemLayout={formItemLayout}/>
      </div>
    );
  }
}

export default Parent
