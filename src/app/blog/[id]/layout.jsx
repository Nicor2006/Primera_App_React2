import Image from "next/image"


export default function Layout ({children}){
    return (
            <>
    <Image src="/img/ImagenEjemplo.jpg" width={300} height={300}/>
        <main>
        {children}
        </main>
            </>
    )
}