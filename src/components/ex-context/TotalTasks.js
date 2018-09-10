import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  text-align: center;
`

class TotalTasks extends Component {
  render() {
    return <StyledCard title="Total" bordered={false}>0</StyledCard>;
  }
}

export default TotalTasks
