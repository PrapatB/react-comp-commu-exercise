import React, { Component } from "react";
import styled from "styled-components";
import { Layout, Menu, Icon } from "antd";
import logo from '../logo.svg';
import ContentRoute from "./ContentRoute";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledHeaderTitle = styled.h2`
  padding-left: 16px;
`;

class MainLayout extends Component {
  render() {
    return (
      <StyledLayout>
        <Sider>
          <img src={logo} alt="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home"><Icon type="home" />Home</Menu.Item>
            <SubMenu key="parent-to-child" title={<span><Icon type="share-alt" />Parent to Child</span>}>
              <Menu.Item key="props">Props</Menu.Item>
              <Menu.Item key="instance-methods">Instance Methods</Menu.Item>
            </SubMenu>
            <SubMenu key="child-to-parent" title={<span><Icon type="to-top" />Child to Parent</span>}>
              <Menu.Item key="callback-functions">Callback Functions</Menu.Item>
              <Menu.Item key="event-bubbling">Event Bubbling</Menu.Item>
            </SubMenu>
            <SubMenu key="sibling-to-sibling" title={<span><Icon type="team" />Sibling to Sibling</span>}>
              <Menu.Item key="parent-component">Parent Component</Menu.Item>
            </SubMenu>
            <SubMenu key="any-to-any" title={<span><Icon type="notification" />Any to Any</span>}>
              <Menu.Item key="observer-pattern">Observer Pattern</Menu.Item>
              <Menu.Item key="global-variables">Global Variables</Menu.Item>
              <Menu.Item key="context">Context</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} >
            <StyledHeaderTitle>React Component Communication Exercise</StyledHeaderTitle>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <ContentRoute />
          </Content>
        </Layout>
      </StyledLayout>
    );
  }
}

export default MainLayout;
