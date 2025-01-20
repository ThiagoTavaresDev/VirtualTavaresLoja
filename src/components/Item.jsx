import React from "react";
import ItemCount from './ItemCount';

const Item = ({ item, onSelect }) => {
    return (
      <div style={styles.card}>
        <h3>{item.title}</h3>
        <img src={item.pictureUrl} alt={item.title} style={styles.image} />
        <p>Preço: R${item.price}</p>
        <p>Estoque: {item.stock}</p>
        <ItemCount 
          stock={item.stock} 
          initial={1} 
          onAdd={(count) => console.log(`Adicionado ${count} ao carrinho`)} 
        />
        <button 
          style={styles.button}
          onClick={() => onSelect(item.id)}
        >
          Ver Detalhes
        </button>
      </div>
    );
  };

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    maxWidth: "200px",
    margin: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Item;
