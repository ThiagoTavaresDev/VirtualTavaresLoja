import React from "react";
import styled from "styled-components";
import Item from './Item';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }
`;

const ItemList = ({ items, onItemSelect }) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <Item 
          key={item.id} 
          item={item} 
          onSelect={onItemSelect}
        />
      ))}
    </ListContainer>
  );
};

export default ItemList;