import BoxPropag from "./BoxPropag";
import propag1 from "../assets/propag1.jpg"
import propag2 from "../assets/propag2.jpg"
import propag3 from "../assets/propag3.jpg"

function Propagandas (){
    return(
        <section className="propagandas">
            <h1>
                Promoções
            </h1>
            <div className="musicas">
                <BoxMusic propag={propag1} titulo="Segunda - Butique de Carnes e Conveniência Terra América" data="DEU MORAL" link1="https://youtu.be/CH8-4BbYSf4?si=EHttEDkVLS4G24Tw" />
                <BoxMusic propag={propag2} titulo="Segunda - Butique de Carnes e Conveniência Terra América" data="DEU MORAL" link1="https://youtu.be/CH8-4BbYSf4?si=EHttEDkVLS4G24Tw" />
                <BoxMusic propag={propag3} titulo="Segunda - Butique de Carnes e Conveniência Terra América" data="DEU MORAL" link1="https://youtu.be/CH8-4BbYSf4?si=EHttEDkVLS4G24Tw" />
            </div>
        </section>
    )
}
export default Propagandas;