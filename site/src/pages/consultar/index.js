import { useEffect, useState } from "react"
import { ConsultarAnime } from "../../api/anime"
import { Link } from "react-router-dom";

import './index.css'

export default function Consultar(){

    const [animes, setAnimes] = useState([])

    async function CarregarAnime(){
        const r = await ConsultarAnime();
        setAnimes(r);
    }

    useEffect(() => {
        CarregarAnime();
    }, [])

    return(
        <div>
            <h1>Consulte seus animes!</h1>

            <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
            </thead>
            <tbody className="style-tab">
                {animes.map(item =>
                <tr key={item.id}
                    >
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                </tr>
                
                )}
            </tbody>

            </table>

            <Link to='/'>Cadastre seu anime!</Link>
        </div>
    )
}