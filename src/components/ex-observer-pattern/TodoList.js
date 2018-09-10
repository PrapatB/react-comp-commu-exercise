import React, { Component } from "react";
import styled from "styled-components";
import { Card, Row, Col, List, Icon, Input, Button } from "antd";

const StyledNewTaskNameInput = styled(Input)`
  width: calc(100% - 64px);
  margin-right: 6px;
`

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskName: ''
    }
  }

  handleNewTaskNameChange = e => {
    this.setState({
      newTaskName: e.target.value
    });
  }

  handleAdd = () => {
    this.setState(prevState => {
      if (prevState.newTaskName.trim().length === 0) return;

      const newTasks = prevState.tasks.slice();
      newTasks.push(prevState.newTaskName);

      return {
        tasks: newTasks,
        newTaskName: ''
      };
    })
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={24}>
            <Card bordered={false}>
              <div>
                <StyledNewTaskNameInput 
                  prefix={<Icon type="check" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Task name" 
                  value={this.state.newTaskName} 
                  onChange={this.handleNewTaskNameChange} 
                />
                <Button
                  type="primary"
                  onClick={this.handleAdd}
                >
                  Add
                </Button>
              </div>                            
              <br />
              <List
                size="small"
                bordered
                dataSource={this.state.tasks}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoList;
