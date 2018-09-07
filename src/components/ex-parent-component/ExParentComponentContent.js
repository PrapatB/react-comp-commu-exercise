import React from 'react';
import { Tree } from 'antd';
import exerciseContent from '../../hocs/exerciseContent';
import Code from '../Code';
import Parent from './Parent'

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

export default exerciseContent(
  'Parent Component', 
  () => <div>
    <p>
      By modifying following files.
    </p>
    <DirectoryTree
        defaultExpandAll
      >
        <TreeNode title="src" key="src">
          <TreeNode title="components" key="components">
            <TreeNode title="ex-parent-component" key="ex-parent-component">
              <TreeNode title="Parent.js" key="Parent.js" isLeaf />
              <TreeNode title="ChildA.js" key="ChildA.js" isLeaf />
              <TreeNode title="ChildB.js" key="ChildB.js" isLeaf />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </DirectoryTree>
    <p>
      Please make the value of textfield in both <Code>ChildA</Code> component and <Code>ChildB</Code> component to always synced.
    </p>
    <p>
      Using <Code>Parent Component</Code> strategy described in <a href="https://www.javascriptstuff.com/component-communication/#5-parent-component" target="_blank">https://www.javascriptstuff.com/component-communication/#5-parent-component</a>
    </p>
  </div>,
  () => <Parent />
);
