import React, { Component } from "react";
import styled from 'styled-components'
import { Menu, Layout, Icon } from "antd";
import TodoList from "./TodoList";
import Summary from "./Summary";

const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
  padding: 0;
  height: auto;
`

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: 'todo'
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <Layout>
        <StyledHeader>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="todo">
              <Icon type="mail" />
              Todo List
            </Menu.Item>
            <Menu.Item key="summary">
              <Icon type="appstore" />
              Summary
            </Menu.Item>
          </Menu>
        </StyledHeader>
        <Content>
          { this.state.current === 'todo' && <TodoList /> }
          { this.state.current === 'summary' && <Summary /> }
        </Content>
      </Layout>      
    );
  }
}

export default Tabs;
