function pessoa({nome, idade, profissão, foto}){
    return(
        <div>
            <img src={props.foto} alt={props.nome} />
            <h2>nome: {props.nome}</h2>
            <p>idade: {props.idade}</p>
            <p>profissão: {props.profissão}</p>
        </div>
    )
}

export default pessoa