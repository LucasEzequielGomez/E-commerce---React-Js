import React from 'react'
import { useState, useEffect } from 'react';



const ItemListContainer = () =>{

    const products = [
        {id:1,nombre:"producto1"},
        {id:2,nombre:"producto2"},
        {id:3,nombre:"producto3"},
        {id:4,nombre:"producto4"}
    ];
    
    return (
        <div className="ItemListContainer">
            <div>
                <input type="text" onChange={(evt) => setInput(evt.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer