import React from 'react';
import { Tree } from 'antd';
import exerciseContent from '../../hocs/exerciseContent';
import Code from '../Code';
import Parent from './Parent'

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

export default exerciseContent(
  "Props", 
  () => <div>
    <p>
      By modifying following files.</p>
    <DirectoryTree
        multiple
        defaultExpandAll
      >
        <TreeNode title="src" key="src">
          <TreeNode title="components" key="components">
            <TreeNode title="ex-intance-methods" key="ex-intance-methods">
              <TreeNode title="Parent.js" key="Parent.js" isLeaf />
              <TreeNode title="Child.js" key="Child.js" isLeaf />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </DirectoryTree>
    <p>
      Please make the text value in <Code>Child</Code> component to automatically sync with the input of the textfield in <Code>Parent</Code> component.
    </p>
    <p>
      Using <Code>Instance Methods</Code> strategy as described in <a href="https://www.javascriptstuff.com/component-communication/#2-instance-methods" target="_blank">https://www.javascriptstuff.com/component-communication/#2-instance-methods</a>
    </p>
  </div>,
  () => <Parent />
);
