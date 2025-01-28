import React from 'react';
import styled from 'styled-components';
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

const ItemDetail = ({ item }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Adicionado ${quantity} unidade(s) do produto ${item.title} ao carrinho`);
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
        <ItemCount 
          stock={item.stock} 
          initial={1} 
          onAdd={handleAddToCart}
        />
      </InfoContainer>
    </DetailContainer>
  );
};

export default ItemDetail;