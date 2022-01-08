import React from 'react'
import { Routes,Route} from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="item/:id" element={<ItemDetailContainer/>}/>
            <Routes>
        </main>
    )
}

export default Main;
