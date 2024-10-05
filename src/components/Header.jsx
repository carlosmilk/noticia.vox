import logo from "../assets/logo Vox90.png"

function Header(){
    return(
        <header>
            <img src={logo} class="logo"/>
        <div class="menu"> 
            <a class="itens-menu" href="">Promoções</a>
            <a class="itens-menu" href="">Blogs</a>
            <a class="itens-menu" href="">Programação</a>
            <a class="itens-menu" href="">Anuncie</a>
        </div>

        <div class="relogio">
            <p>
                12:00
            </p>
        </div>
        </header>
    )
}
export default Header;