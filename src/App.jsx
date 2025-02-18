import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    <CartProvider>
    <BrowserRouter>
    <GlobalStyles />
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
    </CartProvider>
  );
};

export default App;