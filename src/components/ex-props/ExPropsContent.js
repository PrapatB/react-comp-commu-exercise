import React from 'react';
import { Tree } from 'antd';
import exerciseContent from '../../hocs/exerciseContent';
import Code from '../Code';
import Parent from './Parent'

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

export default exerciseContent(
  "Props", 
  <div>
    <p>By modifying following files, please make the text value in <Code>Child</Code> component to automatically sync with the input of the textfield in <Code>Parent</Code> component.</p>
    <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={this.onSelect}
        onExpand={this.onExpand}
      >
        <TreeNode title="src" key="src">
          <TreeNode title="components" key="components">
            <TreeNode title="ex-props" key="ex-props">
              <TreeNode title="Parent.js" key="Parent.js" isLeaf />
              <TreeNode title="Child.js" key="Child.js" isLeaf />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </DirectoryTree>
  </div>,
  <Parent />
);
