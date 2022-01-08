import React from 'react'
import { useState } from 'react'



export const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const decrementar = () => {
        if (contador >= initial) {
            setContador(contador -1)
        }
    }
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    return (
        <>
            <div>
                <span>
                    <button onClick={decrementar}>-</button>
                </span>
                <span style={{backgroundColor: 'red', color: 'white', width: '30px' }}>{contador}</span>
                <span>
                    <button onClick={incrementar}>+</button>
                </span>
                <button onClick={()=>{onAdd(contador)}}>Agregar al carrito</button>
            </div>  
        </>
    )
}

export default ItemCount