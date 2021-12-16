import React from 'react'
import ItemList from './ItemList'

export const product = [
    {id: 1, title: "barra de acero tipo Ø6", price: 800, img: './img/barrasDeAcero.webp', stock:5},
    {id: 2, title: "ladrillo comun", price: 850, img: './img/barrasDeAcero.webp', stock:5},
    {id: 3, title: "ladrillo Retak 12", price: 900, img: 'img/barrasDeAcero.webp', stock:5},
    {id: 4, title: "cerecita de 20L", price: 950, img: 'img/barrasDeAcero.webp', stock:5},
]



const ItemListContainer = () =>{
    
    return (
        <div className="ItemListContainer">
            <ItemList product={product}/>
        </div>
    )

}

export default ItemListContainer