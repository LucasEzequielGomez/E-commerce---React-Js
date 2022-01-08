import Item from "./Item"

const ItemList = ({product}) => {
    return (
        <ul className="ListGroup">
            {product.map(product =><Item key={product.id} product={product}/>)}
        </ul>
    ) 
}

export default ItemList