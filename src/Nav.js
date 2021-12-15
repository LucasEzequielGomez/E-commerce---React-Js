import CartWidget from "./CartWidget"


export const Nav = () => {
    return (
      <nav className="NavBar">
        <div>
          <h3>El corralon de Bella Vista</h3>
        </div>
        <CartWidget/>
      </nav>
      
    )
}

export default Nav