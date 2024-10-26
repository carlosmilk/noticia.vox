import BoxPropag from "./BoxPropag";
import propag1 from "../assets/propag1.jpg"
import propag2 from "../assets/propag2.jpg"
import propag3 from "../assets/propag3.jpg"

function Propagandas (){
    return(
        <section className="propagandas">
            <h1 className="Tpromocao">
                Promoções
            </h1>
            <div className="propaganda">
                <BoxPropag propag={propag1} titulo="Segunda - Butique de Carnes e Conveniência Terra América" data="válido até 31/12/2024" link1="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/25d41e35-7d7d-485e-abd5-ff93dcc028f6/730326051" />
                <BoxPropag propag={propag2} titulo="Sabadou - Barbearia Invicta" data="válido até 31/12/2024" link1="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/4b26de37-9990-4e4f-86b3-ea7b82763ee5/741175192" />
                <BoxPropag propag={propag3} titulo="Bom Dia Vox - É Fake ou Verdade?" data="válido até 31/12/2024" link1="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/c6aa45ee-d6b2-4638-b85d-6c2a96711ce0/642628756" />
            </div>
        </section>
    )
}
export default Propagandas;