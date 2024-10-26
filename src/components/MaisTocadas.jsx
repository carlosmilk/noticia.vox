import BoxMusic from "./BoxMusic";
import musica1 from "../assets/1.jpg"
import musica2 from "../assets/2.jpg"
import musica3 from "../assets/3.jpg"
import musica4 from "../assets/4.jpg"
import musica5 from "../assets/5.jpg"
import musica6 from "../assets/6.jpg"
import musica7 from "../assets/7.jpg"
import musica8 from "../assets/8.jpg"
import musica9 from "../assets/9.jpg"
import musica10 from "../assets/10.jpg"

function MaisTocadas (){
    return(
        <section className="maisTocadas">
            <h1>
                Mais Tocadas
            </h1>
            <div className="musicas">
                <BoxMusic capa={musica1} nome="ZÉ NETO & CRISTIANO" musica="DEU MORAL" link="https://youtu.be/CH8-4BbYSf4?si=EHttEDkVLS4G24Tw" />
                <BoxMusic capa={musica2} nome="JORGE & MATEUS & LAUANA PRADO" musica="HAVERÁ SINAIS" link="https://youtu.be/Muo3F10dAcw?si=5UyseZCVNXkxG4bq" />
                <BoxMusic capa={musica3} nome="LUAN SANTANA & LUAN PEREIRA" musica="EU SOU SENTIMENTO" link="https://youtu.be/Ad1s0Xn2VDo?si=_o0wN4myQ7GZySYN" />
                <BoxMusic capa={musica4} nome="GUSTTAVO LIMA & BRUNO & MARRONE" musica="RELAÇÃO ERRADA" link="https://youtu.be/y4IIym6BmX0?si=xfRfVRUeHACOej9L" />
                <BoxMusic capa={musica5} nome="SIMONE MENDES" musica="DOIS TRISTES" link="https://youtu.be/KPQkb2AuXSw?si=8H4AP7MCKforDsWr" />
                <BoxMusic capa={musica6} nome="ANA CASTELA" musica="MINHA HERANÇA" link="https://youtu.be/OrIlirfhorI?si=ybXfaOVQBRz8GSL-" />
                <BoxMusic capa={musica7} nome="DIEGO & VICTOR HUGO" musica="BEM MAIS QUE EU" link="https://youtu.be/v59WhF2GtcM?si=KH5s4-CHL0DnGj67" />
                <BoxMusic capa={musica8} nome="GUILHERME & BENUTO" musica="CHOROSA" link="https://youtu.be/qMH3ZGDG1VQ?si=F5iS2GCOt7tOzLoO" />
                <BoxMusic capa={musica9} nome="FELIPE E RODRIGO" musica="GOSTA DE RUA" link="https://youtu.be/ZsN_0_6yEXk?si=RQMvHdGka8en5JTd" />
                <BoxMusic capa={musica10} nome="FERRUGEM & SORRISO MAROTO" musica="APAGUEI PRA TODOS" link="https://youtu.be/o3dknP3jclw?si=lTVvglrOb-xaPRCn" />
            </div>
        </section>
    )
}
export default MaisTocadas;