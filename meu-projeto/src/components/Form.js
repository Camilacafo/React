import { useState } from "react"

function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()
    
    
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" >NOME:</label>
                    <br/>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" autocomplete
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="password" >SENHA:</label>
                <br/>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" autocomplete
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>

            </form>
        </div>
    )
}

export default Form