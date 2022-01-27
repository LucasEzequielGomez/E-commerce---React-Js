<<<<<<< HEAD
import React from 'react'
import {useEffect, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
//import ItemList from './ItemList'

/*export const product = [
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

}*/

const ItemListContainer = (prop) =>{
    
    const [items, setItems] = useState([])
    const {id} = useParams ()

    useEffect(() => {

        if(!id){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
            .catch(err => console.log(err))
        } else {
            fetch(`https://fakestoreapi.com/products/categories/${id}`)
            .then(res=>res.json())
            .then(json=> {
                setItems(json)
            })
        }
    }, [id])


    if (items.length === 0 ) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
            )
    }
    

}

export default ItemListContainer




=======
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
>>>>>>> eed3e382e8c77b708e56533e88f455b9cf5f3a41
