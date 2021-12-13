import { getCategories } from './Products'


const NavBar = () => {
    return (
      <nav className="NavBar">
        <div>
          <h3>El corralon de Bella Vista</h3>
        </div>
        <div className="Categories">
          {categories.map(c => <button key={c.id} className='Option'>{c.description}</button>)}
        </div>
        <CartWidget/>
      </nav>
      
    )
}

export default Nav
