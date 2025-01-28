import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const Container = styled.div`
  margin-top: 80px;
  padding: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 1rem;
  }
`;

const Content = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
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
