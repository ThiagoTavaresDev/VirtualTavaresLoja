import React from 'react';
import styled from 'styled-components';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartContainer = styled(Link)`
  position: relative;
  cursor: pointer;
  margin-left: 1rem;
  transition: transform 0.2s;
  text-decoration: none;
  display: ${props => props.$hasItems ? 'block' : 'none'};

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
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  // Se não houver itens, não renderiza o componente
  if (quantity === 0) {
    return null;
  }

  return (
    <CartContainer to="/cart" $hasItems={true}>
      <ShoppingCart size={24} color="white" />
      <CartCount>{quantity}</CartCount>
    </CartContainer>
  );
};

export default CartWidget;