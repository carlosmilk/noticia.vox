function BoxMusic({capa, nome, musica, link}){
    return(
            <div className="boxMusic">
                <img className="imgBoxMusic" src={capa}/>
                <p className="nomecantor">{nome}</p>
                <p className="deumoral">{musica}</p>
                <a className="botaomusica" href={link} target="_blank">OUÇA NO YOUTUBE</a></div>
    )
}

export default BoxMusic;