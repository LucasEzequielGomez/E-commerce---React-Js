import React from "react"
import {useState} from "react"
import Header from "./Header"
import itemCount from "./itemCount"
import Main from "./Main"
import Footer from "./Footer"


const App = () => {

    return (
        <>
            <Header/>
            <itemCount>
                <p>El contador va : {stock}</p> 
                <button onClick={reducirContador}>-</button>
                <button onClick={aumentarContador}>+</button>
            </itemCount>
            <Main>
            <Footer/>
        </>
    )
}

export default App;