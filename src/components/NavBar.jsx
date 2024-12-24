import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed; /* Fixa a barra no topo */
  top: 0;          /* Posiciona no topo */
  left: 0;
  width: 100%;     /* Faz com que a barra ocupe toda a largura */
  z-index: 1000;   /* Garante que fique acima de outros elementos */
`;

const Brand = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: #ffcc00;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Brand href="#">Virtual Tavares</Brand>
      <NavList>
        <NavItem>
          <a href="#categoria1">Categoria 1</a>
        </NavItem>
        <NavItem>
          <a href="#categoria2">Categoria 2</a>
        </NavItem>
        <NavItem>
          <a href="#categoria3">Categoria 3</a>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
