import React from 'react';
import styled from 'styled-components';
import { ShoppingCart } from 'lucide-react';

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ffcc00;
  color: #333;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

const CartWidget = () => {
  return (
    <CartContainer>
      <ShoppingCart size={24} color="white" />
      <CartCount>0</CartCount>
    </CartContainer>
  );
};

export default CartWidget;