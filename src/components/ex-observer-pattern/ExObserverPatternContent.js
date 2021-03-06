import React from 'react';
import { Tree } from 'antd';
import exerciseContent from '../../hocs/exerciseContent';
import Code from '../Code';
import Tabs from './Tabs';

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

export default exerciseContent(
  'Observer Pattern', 
  () => <div>
    <p>
      By modifying following files.
    </p>
    <DirectoryTree
        defaultExpandAll
      >
        <TreeNode title="src" key="src">
          <TreeNode title="components" key="components">
            <TreeNode title="ex-observer-pattern" key="ex-observer-pattern">
              <TreeNode title="LatestTask.js" key="LatestTask.js" isLeaf />
              <TreeNode title="Summary.js" key="Summary.js" isLeaf />
              <TreeNode title="Tabs.js" key="Tabs.js" isLeaf />
              <TreeNode title="TodoList.js" key="TodoList.js" isLeaf />
              <TreeNode title="TotalTasks.js" key="TotalTasks.js" isLeaf />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </DirectoryTree>
    <p>
      Please make <Code>LatestTask</Code> component and <Code>TotalTasks</Code> component in <Code>Summary</Code> tab to automatically update their own data when a task is added.
    </p>
    <p>
      <Code>LatestTask</Code> component should display the name of the most recently added task.
    </p>
    <p>
      <Code>TotalTasks</Code> component should display the total number of tasks.
    </p>
    <p>
      Using <Code>Observer Pattern</Code> strategy described in <a href="https://www.javascriptstuff.com/component-communication/#6-observer-pattern" target="_blank">https://www.javascriptstuff.com/component-communication/#6-observer-pattern</a> and <a href="https://medium.com/netscape/buid-simple-react-apps-using-event-emitters-7a46554f56cd" target="_blank">https://medium.com/netscape/buid-simple-react-apps-using-event-emitters-7a46554f56cd</a>
    </p>
  </div>,
  () => <Tabs />
);
