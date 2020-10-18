import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Title from './components/Title';

const StyledTest = styled.div`
  display: flex;
  color: red;
`;

const App: React.FC = () => {
  return (
    <>
      <Title />
      <StyledTest>
        <div>test</div>
        <div>test2</div>
      </StyledTest>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
