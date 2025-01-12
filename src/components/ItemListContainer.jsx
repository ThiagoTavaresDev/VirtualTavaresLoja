import React from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';

const Container = styled.div`
  margin-top: 80px;
  padding: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 1rem;
  }
`;

const Content = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const ItemListContainer = ({ greeting }) => {
  const handleAdd = (quantity) => {
    console.log(`Adicionado ao carrinho: ${quantity} itens`);
  };

  return (
    <Container>
      <Content>
        <h2>{greeting}</h2>
        <ItemCount stock={5} initial={1} onAdd={handleAdd} />
      </Content>
    </Container>
  );
};

export default ItemListContainer;
