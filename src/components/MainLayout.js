import React, { Component } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import logo from '../logo.svg';
import ContentRoute from "./ContentRoute";
import { BrowserRouter as Router } from "react-router-dom";
import LinkMenu from "./LinkMenu";

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
  }

  render() {
    return (
      <Router>
        <StyledLayout>
          <Sider>
            <img src={logo} alt="logo" />
            <LinkMenu />
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} >
              <StyledHeaderTitle>React Component Communication Exercise</StyledHeaderTitle>
            </Header>
            <Content
              style={{
                overflowY: "auto",
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
      </Router>
    );
  }
}

export default MainLayout;
