import React, { useState } from 'react';
import styled from 'styled-components';

const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const CountDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ffcc00')};
  color: ${({ disabled }) => (disabled ? '#666' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ffaa00')};
  }
`;

const AddToCartButton = styled(Button)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    }
  };

  return (
    <CountContainer>
      <CountDisplay>{count}</CountDisplay>
      <ButtonContainer>
        <Button onClick={handleDecrease} disabled={count <= 1}>
          -
        </Button>
        <Button onClick={handleIncrease} disabled={count >= stock}>
          +
        </Button>
      </ButtonContainer>
      <AddToCartButton onClick={handleAddToCart} disabled={stock <= 0}>
        Adicionar ao Carrinho
      </AddToCartButton>
    </CountContainer>
  );
};

export default ItemCount;
