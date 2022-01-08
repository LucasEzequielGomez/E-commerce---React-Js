import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () => {

    const [item, setItem] = useState ({})
    const { id } = useParams
    
    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
            
    },[])

    return (
        <div>
            <ItemDetail/>
        </div>
    )
}
 
export default ItemDetailContainer