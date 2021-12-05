import {useState} from "react"

let stock = 1

const [ stock, initial] = useState (stock)

const reducirContador = () => {
initial (stock + 1)
}

const aumentarContador = () => {
    initial (stock - 1)
}


const itemCount = () => {
    return (stock + 1)

}

export default itemCount;