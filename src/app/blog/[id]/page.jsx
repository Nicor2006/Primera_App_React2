import { notFound } from "next/navigation"

//Nombre OBLIGATORIO
export async function generatestaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then( (res) => res.json())
    return posts.map((post)=>(
        {id: String(post.id)} //el nombre de de la variable TIENE QUE SER LA MISMA QUE LA CARPETA
    ))
}

//obligatorio params, el params es el return de la funcion generatestaticParams
export default async function Page({params}){
    const data = await GetData(params.id)
    if(!data) {
        notFound()
    }
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

async function GetData(id) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id) //Es un llamada bloqueante usando await
        if(!res.ok){
            throw new Error ('Hubo un error en la red'); //Si hay error de una salta al catch
        }
        const posts = await res.json();
        return posts
    } catch (error) {
        console.error(error);
        return null
    }
}