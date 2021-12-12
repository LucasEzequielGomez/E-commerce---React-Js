import Button from 'react-bootstrap-button'
import ItemListContainer from './ItemListConteiner'


const Main = ({productos,childen}) => {

    return (
        <main>
            <h2>e-commerce</h2>
            {children}
            {productos.map((elemnto,indice)=>{
                return <p>{elemento.nombre}</p>
            })}
            <ItemListContainer greeting="Bienvenido"/>
            <Button variant="primary">Eh?</Button>
        </main>
    )
}

export default Main;4
