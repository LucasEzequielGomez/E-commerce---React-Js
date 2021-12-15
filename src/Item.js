import React from 'react'
import ItemCount from './ItemCount'


export const Item = ({product}) => {

    const onAdd = (contador) => {

    }

    return(
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    {product.title}
                </h2>
            </div>
            <img src={product.img} alt={product.name} className="ItemImg"/>
            <p className="Info">
                Precio: {product.price}
            </p>

            <ItemCount stock={product.stock} initial={product.initial} onAdd={onAdd}/>

            <button>Ver detalle</button>
        </div>
    )
}
