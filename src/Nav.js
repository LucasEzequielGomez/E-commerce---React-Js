import CartWidget from "./CartWidget"

const Nav = () => {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <a class="navbar-brand" href="#">El corralón de Bella Vista</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promociones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Presupuestos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </nav>
      
    )
}

export default Nav
