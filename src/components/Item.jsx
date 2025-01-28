import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ItemCount from './ItemCount';

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  max-width: 300px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #2c5282;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductStock = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const DetailsButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #2c5282;
  }
`;

const Item = ({ item }) => {
  const navigate = useNavigate();
    
  const handleDetails = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <CardContainer>
      <ProductImage src={item.pictureUrl} alt={item.title} />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
      <ProductStock>Estoque: {item.stock}</ProductStock>
      <ItemCount 
        stock={item.stock} 
        initial={1} 
        onAdd={(count) => console.log(`Adicionado ${count} ao carrinho`)} 
      />
      <DetailsButton onClick={handleDetails}>
        Ver Detalhes
      </DetailsButton>
    </CardContainer>
  );
};

export default Item;