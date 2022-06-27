import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function CadastroAnime(nome){
    const r = await api.post('/anime',{
       nome: nome 
    })
    return r.data;
}

export async function ConsultarAnime(){
    const r = await api.get('/anime');
    return r.data;
}