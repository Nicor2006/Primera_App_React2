import Link from "next/link";

export const metadata = {
    title: "Blog",
    description: "Increible blog de nada",
  };

export default async function post(){
    const data = await GetData(); //el nombre data NO es obligatorio
    
    return (<div>
        <h1>Blog de pruebas</h1> 
        <p>Este es el contenido del blog</p>
        <br></br>
        <br></br>
            <ul> 
                {data.map(({id, title, body})=>(
                    <li key={id}> 
                        <Link href={`/blog/${id}`}><h3>{id} -- {title}</h3></Link>
                        <p>{body}</p>
                        <br></br>
                    </li>

                )) //Arrow funtion si o si tiene que ser con parentesis en el segundo porque es JSX no JS Y la Li toca si o si ponerle una Key
                }
            </ul>
        </div>)
}

//puede tener el nombre que quiera
async function GetData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts') //Es un llamada bloqueante usando await
        if(!res.ok){
            throw new Error ('Hubo un error en la red'); //Si hay error de una salta al catch
        }
        const posts = await res.json();
        return posts
    } catch (error) {
        console.error(error);
    }
}