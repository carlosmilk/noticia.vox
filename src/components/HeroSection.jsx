import musica from "../assets/equivocada.jpg"

function HeroSection(){
    return(
        <section class="section">
            <div class="hero-section">
                <div class="atual">
                    <img class="musica"src={musica}/>
                    <img src="" alt="" />
                    <div>
                        <p>Equivocada - Tria Véia, Gustavo Lima</p>
                        <p>Festa da Vox com Gio</p>
                     </div>
                </div>
            </div>
        </section>                
    )
}
export default HeroSection;