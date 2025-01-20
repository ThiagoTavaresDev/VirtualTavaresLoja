import React from "react";
import Item from './Item';

const ItemList = ({ items, onItemSelect }) => {
    return (
      <div style={styles.list}>
        {items.map((item) => (
          <Item 
            key={item.id} 
            item={item} 
            onSelect={onItemSelect}
          />
        ))}
      </div>
    );
  };

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  },
};

export default ItemList;
