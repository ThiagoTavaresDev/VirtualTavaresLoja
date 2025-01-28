import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 1rem;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: #d4d5d5;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const mockProducts = [
    {
      id: 1,
      title: "Produto A",
      price: 99.99,
      pictureUrl: "https://picsum.photos/200/300?random=1",
      stock: 10, // Adicionando o estoque
      category: "books"
    },
    {
      id: 2,
      title: "Produto B",
      price: 149.99,
      pictureUrl: "https://picsum.photos/200/300?random=2",
      stock: 5, // Adicionando o estoque
      category: "electronics"
    },
    {
      id: 3,
      title: "Produto C",
      price: 199.99,
      pictureUrl: "https://picsum.photos/200/300?random=3",
      stock: 8, // Adicionando o estoque
      category: "electronics"
    },
  ];
  const ItemListContainer = ({ greeting, onItemSelect }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (categoryId) {
                const filteredProducts = mockProducts.filter(
                  product => product.category === categoryId
                );
                resolve(filteredProducts);
              } else {
                resolve(mockProducts);
              }
          }, 2000);
        });
      };
      setLoading(true);
      fetchProducts().then((data) => {
        setItems(data);
        setLoading(false);
      });
    }, [categoryId]);
  
    return (
      <Container>
        <Content>
          <h2>{greeting}</h2>
          {loading ? (
            <p>Carregando produtos...</p>
          ) : (
            <ItemList items={items} onItemSelect={onItemSelect} />
          )}
        </Content>
      </Container>
    );
  };

export default ItemListContainer;
