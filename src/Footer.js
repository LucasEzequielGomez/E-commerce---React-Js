import Nav from "./Nav"

const Footer = () => {
    return (
        <>
        <footer>
            <div id="logo">
                <h2>El corralón 🔨🧱</h2>
            </div>
            <div class="row">
                <form class="col s12" id="formulario">    
                    <div class="row">
                        <h3>SUSCRIBITE A NUESTRO NEWSLETTER</h3>
                        <div class="input-field col s6">
                            <input placeholder="Nombre" id="name" type="text" class="validate"></input>
                        </div>
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" placeholder="Email"></input>
                        </div>
                    </div>
                    <input class="submit" typ e="submit" id="submit" value="Enviar"></input>
                </form>
            </div>
            <div>
                <ul id="social-contact">
                    <p>+54 1130929827</p>
                    <p>Bella Vista, Buenos Aires, Argentina</p>
                    <p>lucasgomezmmo@gmail.com</p>
                </ul>
            </div>
        </footer>
        </>
    )
}

export default Footer;