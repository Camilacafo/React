function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
       console.log("Cadastrou!")
    }
    
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite o seu nome" />
                <input type="submit" value="cadastrar" />

            </form>
        </div>
    )
}

export default Form