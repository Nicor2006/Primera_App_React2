import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<main className="flex min-h-screen item-center justify-between p-24"> 
        <h1>Hola mundo</h1>
        <Link href="/blog"> Ir al blog </Link>
    </main>
  );
}
