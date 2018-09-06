import React from "react";
import styled from 'styled-components'
import { Anchor } from "antd";

const { Link } = Anchor;

const StyledWelcome = styled.h4`
  margin-bottom: 1.5rem;
`

export default () => (
  <div>
    <StyledWelcome>Welcome!</StyledWelcome>    
    <p>
      The exercise of each communication methods can be accessed via the side
      menu.
    </p>
    <p>
      This exercise is inspired by and based on{" "}
      <a href="https://www.javascriptstuff.com/component-communication">
        8 no-Flux strategies for React component communication
      </a>{" "}
      article. Please read it beforehand for a better understanding.
    </p>
  </div>
);
