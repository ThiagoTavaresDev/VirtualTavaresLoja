import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

/**
 * Componente que exibe os detalhes de um item e permite adicionar ao carrinho.
 * 
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.item - Objeto com os dados do item.
 * @param {string} props.item.image - URL da imagem do item.
 * @param {string} props.item.title - Título do item.
 * @param {string} props.item.description - Descrição do item.
 * @param {number} props.item.price - Preço do item.
 * @param {number} props.item.stock - Quantidade em estoque do item.
 */
function ItemDetail({ item }) {
    // Estado para controlar a quantidade de itens adicionados
    const [quantityAdded, setQuantityAdded] = useState(0);

    /**
     * Handler do evento onAdd emitido pelo ItemCount.
     * 
     * @param {number} quantity - Quantidade de itens adicionados.
     */
    const handleOnAdd = (quantity) => {
        if (quantity <= item.stock) {
            setQuantityAdded(quantity);
        }
    };

    return (
        <div className="item-detail">
            <div className="item-detail-content">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="price">R$ {item.price}</p>
            </div>
            
            {/* Renderização condicional baseada na quantidade adicionada */}
            {quantityAdded === 0 ? (
                <ItemCount 
                    initial={1} 
                    stock={item.stock} 
                    onAdd={handleOnAdd}
                />
            ) : (
                <Link to='/cart' className="finish-button">
                    Finalizar compra ({quantityAdded} {quantityAdded === 1 ? 'item' : 'itens'})
                </Link>
            )}
        </div>
    );
}

export default ItemDetail;