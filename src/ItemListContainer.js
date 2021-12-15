import React from 'react'
import ItemList from './ItemList'

export const product = [
    {id: 1, title: "barra de acero tipo Ø6", tipo: "aceros", desc: "bara de acero acindar", price: 800, talle: "aceros", img: './img/barrasDeAcero.webp', stock:1},
    {id: 2, title: "barra de acero tipo Ø8", tipo: "aceros", desc: "bara de acero acindar", price: 850, talle: "aceros", img: './img/barrasDeAcero.webp', stock:1},
    {id: 3, title: "barra de acero tipo Ø10", tipo: "aceros", desc: "bara de acero acindar", price: 900, talle: "aceros", img: 'img/barrasDeAcero.webp', stock:1},
    {id: 4, title: "barra de acero tipo Ø12", tipo: "aceros", desc: "bara de acero acindar", price: 950, talle: "aceros", img: 'img/barrasDeAcero.webp', stock:1},
]




const ItemListContainer = () =>{
    
    return (
        <div className="ItemListContainer">
            <ItemList product={product}/>
        </div>
    )

}

export default ItemListContainer