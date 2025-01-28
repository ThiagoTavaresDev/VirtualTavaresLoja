import React, { useState } from 'react';
import styled from 'styled-components';
import CartWidget from './CartWidget';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Brand = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const NavBar = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
    <Brand to="/">Virtual Tavares</Brand>
    <NavContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuButton>
      <NavList isOpen={isOpen}>
        {categories.map(category => (
          <NavItem key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </NavItem>
        ))}
        <NavItem>
          <CartWidget />
        </NavItem>
      </NavList>
    </NavContainer>
  </Nav>
  );
};

export default NavBar;