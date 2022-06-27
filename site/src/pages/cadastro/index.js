import { useState } from "react"
import { Link } from "react-router-dom"

import { CadastroAnime } from "../../api/anime.js";

export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);


    async function SalvarClick(){
        try {
            const r = await CadastroAnime(nome);
            alert('anime cadastrado!');
            setId(r.id)
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <div>
            <h1>Cadastre aqui o seu anime!</h1>
            <p>Insira o nome do anime: </p>
            <input type="text" value={nome} onChange={ e => setNome(e.target.value)}/> 
            <button onClick={SalvarClick}> Salvar</button>

            <Link to='/consultar'>
                <p>
                Consultar Animes
                </p>
                </Link>
        </div>
    )

}