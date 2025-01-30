import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #d4d5d5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FinishButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

const StockInfo = styled.p`
  color: ${props => props.inStock ? '#28a745' : '#dc3545'};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    if (quantity > 0 && quantity <= item.stock) {
      setQuantityAdded(quantity);
      // Aqui você pode adicionar a lógica para salvar no carrinho
      console.log(`Adicionado ${quantity} ${quantity === 1 ? 'item' : 'itens'} ao carrinho`);
    }
  };

  return (
    <DetailContainer>
      <ImageContainer>
        <Image src={item.pictureUrl} alt={item.title} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Price>R$ {item.price.toFixed(2)}</Price>
        <Description>{item.description}</Description>
        <StockInfo inStock={item.stock > 0}>
          {item.stock > 0 
            ? `${item.stock} unidades disponíveis`
            : 'Produto indisponível'
          }
        </StockInfo>
        
        {quantityAdded === 0 ? (
          <ItemCount 
            stock={item.stock} 
            initial={1} 
            onAdd={handleOnAdd}
          />
        ) : (
          <FinishButton to="/cart">
            Terminar compra ({quantityAdded} {quantityAdded === 1 ? 'item' : 'itens'})
          </FinishButton>
        )}
      </InfoContainer>
    </DetailContainer>
  );
};

export default ItemDetail;