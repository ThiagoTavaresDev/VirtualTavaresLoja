import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
`;

// Mock categories data
const categories = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "books", name: "Books" }
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <BrowserRouter>
      <AppContainer>
        <NavBar categories={categories} />
        <Routes>
          <Route 
            path="/" 
            element={
              <ItemListContainer 
                greeting="Bem vindo ao Virtual Tavares Loja"  
                onItemSelect={handleItemSelect}
              />
            } 
          />
          <Route 
            path="/category/:categoryId" 
            element={
              <ItemListContainer 
                greeting="Category Products" 
                onItemSelect={handleItemSelect}
              />
            } 
          />
          <Route 
            path="/item/:id" 
            element={
              <ItemDetailContainer 
                onBack={() => setSelectedItem(null)}
              />
            } 
          />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;