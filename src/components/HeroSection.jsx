import musica from "../assets/equivocada.jpg"

function HeroSection(){
    return(
        <section className="section">
            <div className="hero-section">
                <div className="atual">
                    <img className="musica"src={musica}/>
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