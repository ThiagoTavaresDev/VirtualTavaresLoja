import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <AppContainer>
      <NavBar />
      {selectedItemId ? (
        <ItemDetailContainer 
          itemId={selectedItemId} 
          onBack={() => setSelectedItemId(null)}
        />
      ) : (
        <ItemListContainer 
          greeting="Bem-vindo à Virtual Tavares! Confira nossos produtos."
          onItemSelect={setSelectedItemId}
        />
      )}
    </AppContainer>
  );
};

export default App;