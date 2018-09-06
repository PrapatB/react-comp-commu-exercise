import React, { Component } from "react";
import styled from "styled-components";

class ExerciseContent extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <div><h3>{title}</h3></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default ExerciseContent;
