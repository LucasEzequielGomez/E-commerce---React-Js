import React from "react"
import {useState} from "react"
import Header from "./Header"
import itemCount from "./itemCount"
import Main from "./Main"
import Footer from "./Footer"


const productosIniciales = [
    {id:1,nombre:"producto1"},
    {id:2,nombre:"producto2"},
    {id:3,nombre:"producto3"},
    {id:4,nombre:"producto4"}
]
const App = () => { 


    const producto = {titulo:"producto1"}

const [productos,setPreductos] = useState

    useEffect (() =>{
        const promesa = new promise ((a)=>{
            setTimeout (()=>{
                
            },2000)
        })

        promesa
            .then(()=>{
                console.log("salio mal? ahre")
            })
    },[])
  
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