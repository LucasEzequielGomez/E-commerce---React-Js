import React from "react"
import Header from "./Header"
import Layout from "./Layout"
import { BrowserRouter } from "react-router-dom"



const App = () => {

    return(
        <BrowserRouter>
                <Header/>
                <Layout/>
        </BrowserRouter>
    )

}


export default App