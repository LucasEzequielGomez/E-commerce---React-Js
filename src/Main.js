import React from 'react'
import ItemListContainer from './ItemListContainer'


const Main = ({productos,childen}) => {

    return (
        <main>
            <h2>e-commerce</h2>
            <ItemListContainer greeting="Bienvenido"/>
        </main>
    )
}

export default Main;
