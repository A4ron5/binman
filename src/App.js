import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Main } from './pages';
import { Peoples } from './features';
import 'reset-css';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body{
    
  }
  input, select {
    border: none;
    box-shadow: none;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Main>
        <Peoples />
      </Main>
    </React.Fragment>
    
  );
}

export default App;
