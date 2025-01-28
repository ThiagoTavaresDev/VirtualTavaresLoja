import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';

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

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const BackButton = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

// Mock products data - agora com descrições completas
const mockProducts = [
  {
    id: 1,
    title: "Produto A",
    price: 99.99,
    pictureUrl: "https://picsum.photos/400/400?random=1",
    description: "Este é um produto de alta qualidade com características únicas. Fabricado com os melhores materiais, oferece durabilidade excepcional e design moderno.",
    stock: 10,
    category: "electronics"
  },
  {
    id: 2,
    title: "Produto B",
    price: 149.99,
    pictureUrl: "https://picsum.photos/400/400?random=2",
    description: "Um produto versátil e inovador que atende às suas necessidades. Possui acabamento premium e tecnologia de ponta.",
    stock: 5,
    category: "electronics"
  },
  {
    id: 3,
    title: "Produto C",
    price: 199.99,
    pictureUrl: "https://picsum.photos/400/400?random=3",
    description: "O melhor da categoria, com recursos exclusivos e performance superior. Ideal para quem busca excelência.",
    stock: 8,
    category: "electronics"
  }
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundItem = mockProducts.find(p => p.id === parseInt(id));
          resolve(foundItem);
        }, 2000);
      });
    };

    setLoading(true);
    getItem()
      .then(response => {
        setItem(response);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao carregar o item:", error);
        setLoading(false);
      });
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Carregando detalhes do produto...</LoadingMessage>
      </Container>
    );
  }

  if (!item) {
    return (
      <Container>
        <BackButton onClick={handleBack}>← Voltar</BackButton>
        <LoadingMessage>Produto não encontrado</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={handleBack}>← Voltar</BackButton>
      <ItemDetail item={item} />
    </Container>
  );
};

export default ItemDetailContainer;