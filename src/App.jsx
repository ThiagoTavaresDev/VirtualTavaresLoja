import React from 'react';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Bem-vindo à Minha Loja</h1>
        <p>Escolha uma categoria acima para explorar nossos produtos!</p>
      </main>
    </div>
  );
};

export default App;
