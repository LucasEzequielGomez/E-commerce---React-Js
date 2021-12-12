import React from 'react'
import { useState, useEffect } from 'react';
import ItemListContainer from './ItemListContainer';
import ItemList from './ItemList';


const Item = ({product}) => {
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
            <button>Ver detalle</button>
        </div>
    )
}
 
export default Item