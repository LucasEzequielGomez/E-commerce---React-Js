import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () =>{
    
    const [product, setProducts] = useState ([])
    const [input, setInput] = useState ('')

    useEffect (() => {
        fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA1500')
        .then(response => {
            return Response.json()
        }).then(res => {
            setProfucts(res.results.slice(0,10))
        })
    }, [])

    const handleClick = () => {
        fetch ('https://api.mercadolibre.com/sites/MLA/search?q=${input}')
        .then(response => {
            return Response.json()
        }).then(res => {
            setProfucts(res.results.slice(0,10))
        })
    }
    
    return (
        <div className="ItemListContainer">
            <div>
                <input type="text" onChange={(evt) => setInput(evt.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>
            <ItemList product={products}/>
        </div>
    )
}

export default ItemListContainer