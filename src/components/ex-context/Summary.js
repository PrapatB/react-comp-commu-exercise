import React, { Component } from "react";
import { Card, Row, Col } from 'antd'
import TotalTasks from "./TotalTasks";
import LatestTask from "./LatestTask";

class Summary extends Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={18}>
            <LatestTask />
          </Col>
          <Col span={6}>
            <TotalTasks />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Summary;
