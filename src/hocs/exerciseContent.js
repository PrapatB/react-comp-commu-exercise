import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../components/ErrorBoundary';

const StyledDetailWrapper = styled.div`
  margin-bottom: 1rem;
`

const StyledResultWrapper = styled.fieldset`
  border: 1px solid #ccc;
  padding: 1rem;  
`;

const StyledLegend = styled.legend`
  font-size: 0.9rem;
  padding: 0 0.25rem;
  width: auto;
`

const StyledTitle = styled.h3`
  margin-bottom: 1.5rem;
`

export default (title, DetailComponent, ResultComponent) => () => (
  <div>
    <StyledTitle>{title}</StyledTitle>
    <StyledDetailWrapper>{DetailComponent}</StyledDetailWrapper>
    <StyledResultWrapper>
      <StyledLegend>Result</StyledLegend>
      <ErrorBoundary>
        {ResultComponent}
      </ErrorBoundary>
    </StyledResultWrapper>
  </div>
);
