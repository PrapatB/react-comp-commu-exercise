import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

const LinkMenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <SubMenu key="parent-to-child" title={<span><Icon type="share-alt" />Parent to Child</span>}>
        <Menu.Item key="/props"><Link to="/props">Props</Link></Menu.Item>
        <Menu.Item key="/instance_methods"><Link to="/instance_methods">Instance Methods</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="child-to-parent" title={<span><Icon type="to-top" />Child to Parent</span>}>
        <Menu.Item key="/callback_functions"><Link to="/callback_functions">Callback Functions</Link></Menu.Item>
        <Menu.Item key="/event_bubbling"><Link to="/event_bubbling">Event Bubbling</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sibling-to-sibling" title={<span><Icon type="team" />Sibling to Sibling</span>}>
        <Menu.Item key="/parent_component"><Link to="/parent_component">Parent Component</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="any-to-any" title={<span><Icon type="notification" />Any to Any</span>}>
        <Menu.Item key="/observer_pattern"><Link to="/observer_pattern">Observer Pattern</Link></Menu.Item>
        <Menu.Item key="/global_variables"><Link to="/global_variables">Global Variables</Link></Menu.Item>
        <Menu.Item key="/context"><Link to="/context">Context</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
});

export default LinkMenu
