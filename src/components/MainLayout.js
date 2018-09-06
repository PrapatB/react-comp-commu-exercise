import React, { Component } from "react";
import styled from "styled-components";
import { Layout, Menu, Icon } from "antd";
import logo from '../logo.svg';
import { CONTENT_KEY } from '../constants';
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
  constructor(props) {
    super(props);

    this.state = {
      openingContent: CONTENT_KEY.HOME
    }
  }

  handleMenuSelect = ({ key }) => {
    this.setState({
      openingContent: key
    });
  }

  render() {
    return (
      <StyledLayout>
        <Sider>
          <img src={logo} alt="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.openingContent]} onSelect={this.handleMenuSelect}>
            <Menu.Item key={CONTENT_KEY.HOME}><Icon type="home" />Home</Menu.Item>
            <SubMenu key="parent-to-child" title={<span><Icon type="share-alt" />Parent to Child</span>}>
              <Menu.Item key={CONTENT_KEY.EX_PROPS}>Props</Menu.Item>
              <Menu.Item key={CONTENT_KEY}>Instance Methods</Menu.Item>
            </SubMenu>
            <SubMenu key="child-to-parent" title={<span><Icon type="to-top" />Child to Parent</span>}>
              <Menu.Item key={CONTENT_KEY.EX_CALLBACK_FUNCTIONS}>Callback Functions</Menu.Item>
              <Menu.Item key={CONTENT_KEY.EX_EVENT_BUBBLING}>Event Bubbling</Menu.Item>
            </SubMenu>
            <SubMenu key="sibling-to-sibling" title={<span><Icon type="team" />Sibling to Sibling</span>}>
              <Menu.Item key={CONTENT_KEY.EX_PARENT_COMPONENT}>Parent Component</Menu.Item>
            </SubMenu>
            <SubMenu key="any-to-any" title={<span><Icon type="notification" />Any to Any</span>}>
              <Menu.Item key={CONTENT_KEY.EX_OBSERVER_PATTERN}>Observer Pattern</Menu.Item>
              <Menu.Item key={CONTENT_KEY.EX_GLOBAL_VARIABLES}>Global Variables</Menu.Item>
              <Menu.Item key={CONTENT_KEY.EX_CONTEXT}>Context</Menu.Item>
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
            <ContentRoute contentKey={this.state.openingContent} />
          </Content>
        </Layout>
      </StyledLayout>
    );
  }
}

export default MainLayout;
