import Image from "next/image"
import Link from "next/link"

export default function primerpost(){
    return (<div>
                <h1>idk idc tbh</h1>
                <Image src="/img/ImagenEjemplo.jpg" width={300} height={300}/>
                <Link href="/"> Ir a la pagina incial</Link>
                <br></br>
                
         </div>)
}