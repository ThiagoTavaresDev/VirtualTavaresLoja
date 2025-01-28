import React, { useState } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.75rem;
  margin: 0.5rem 0;
`;

const CounterControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  background-color: #f8fafc;
  border-radius: 6px;
  padding: 0.25rem;
`;

const QuantityDisplay = styled.div`
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  min-width: 60px;
  text-align: center;
  font-weight: 600;
  color: #2d3748;
`;

const CounterButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #cbd5e1;
    cursor: not-allowed;
  }
`;

const AddButton = styled.button`
  width: 100%;
  background-color: #22c55e;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #16a34a;
  }

  &:disabled {
    background-color: #cbd5e1;
    cursor: not-allowed;
  }
`;

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(prev => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <CounterContainer>
      <CounterControls>
        <CounterButton 
          onClick={handleDecrease} 
          disabled={count <= 1}
          aria-label="Diminuir quantidade"
        >
          -
        </CounterButton>
        <QuantityDisplay>{count}</QuantityDisplay>
        <CounterButton 
          onClick={handleIncrease} 
          disabled={count >= stock}
          aria-label="Aumentar quantidade"
        >
          +
        </CounterButton>
      </CounterControls>
      <AddButton 
        onClick={handleAddToCart} 
        disabled={stock <= 0}
      >
        Adicionar ao Carrinho
      </AddButton>
    </CounterContainer>
  );
};

export default ItemCount;