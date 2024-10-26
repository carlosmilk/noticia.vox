function BoxPropag({propag, titulo, data, link1}){
    return(
            <div className="boxPropag">
                <img className="imgBoxPropag" src={propag}/>
                <p className="titulo">{titulo}</p>
                <p className="data">{data}</p>
                <a className="botaopart" href={link1} target="_blank">PARTICIPE</a></div>
    )
}

export default BoxPropag;