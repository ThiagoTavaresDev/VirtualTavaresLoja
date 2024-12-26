import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à Virtual Tavares! Confira nossos produtos." />
    </AppContainer>
  );
};

export default App;