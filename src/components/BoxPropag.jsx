function BoxPropag({propag, titulo, data, link1}){
    return(
            <div className="boxPropag">
                <img className="imgBoxPropag" src={propag}/>
                <div className="infoPromo">
                    <h2 className="titulo">{titulo}</h2>
                    <div className="promo">
                        <p className="data">{data}</p>
                        <a className="botaopart" href={link1} target="_blank">PARTICIPE</a>
                    </div>
                </div>
            </div>
    )
}

export default BoxPropag;