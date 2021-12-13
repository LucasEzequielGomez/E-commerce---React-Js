import React from "react"
import {useState, useEffect} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


const [products,setPreducts] = useState

    useEffect (() =>{
        const promesa = new promise ((a)=>{
            setTimeout (()=>{
                
            },2000)
        })

        promesa
            .then(()=>{
                console.log("salio mal? ahre")
            })

        return (
            <>
                <Header/>
                <itemCount>
                    <p>El contador va : {stock}</p> 
                    <button onClick={reducirContador}>-</button>
                    <button onClick={aumentarContador}>+</button>
                </itemCount>
                <Main/>
                <Footer/>
            </>
        )
    },[])
  
    

export default App