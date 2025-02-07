import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem 1rem;

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }
`;

const ReturnButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartGroup = styled.div`
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const GroupHeader = styled.div`
  background-color: #f8f9fa;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;

  h3 {
    margin: 0;
    color: #333;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 1.5rem;

  h4 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  p {
    margin: 0.25rem 0;
    color: #666;
  }
`;

const RemoveButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #cc0000;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h3 {
    margin: 0 0 1rem 0;
    color: #333;
  }
`;

const CheckoutButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

const Cart = () => {
  const { cart, removeItem, getTotalPrice } = useCart();

  // Agrupa os itens por categoria/tipo
  const groupedItems = useMemo(() => {
    return cart.reduce((groups, item) => {
      const category = item.category || 'Outros';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {});
  }, [cart]);

  if (cart.length === 0) {
    return (
      <EmptyCart>
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione alguns itens para começar suas compras!</p>
        <ReturnButton to="/">
          Voltar para a Loja
        </ReturnButton>
      </EmptyCart>
    );
  }

  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      {Object.entries(groupedItems).map(([category, items]) => (
        <CartGroup key={category}>
          <GroupHeader>
            <h3>{category}</h3>
          </GroupHeader>
          <CartItems>
            {items.map(item => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <h4>{item.name}</h4>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
                  <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </ItemDetails>
                <RemoveButton onClick={() => removeItem(item.id)} title="Remover item">
                  <Trash2 size={24} />
                </RemoveButton>
              </CartItem>
            ))}
          </CartItems>
        </CartGroup>
      ))}
      <CartSummary>
        <h3>Total do Pedido: R$ {getTotalPrice().toFixed(2)}</h3>
        <CheckoutButton to="/checkout">
          Finalizar Compra
        </CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
};

export default Cart;
