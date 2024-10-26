import logo from "../assets/logo Vox90.png"

function Header(){
    return(
        <header>
            <img src={logo} className="logo"/>
        <div className="menu"> 
            <a className="itens-menu" href="">Promoções</a>
            <a className="itens-menu" href="">Blogs</a>
            <a className="itens-menu" href="">Programação</a>
            <a className="itens-menu" href="">Anuncie</a>
        </div>

        <div className="relogio">
            <p>
                12:00
            </p>
        </div>
        </header>
    )
}
export default Header;