export default function Layout ({children}){
    return (
            <>
            <nav>  
                nav bar
          </nav>
            <main> 
                {children}
            </main>
            <footer>footer</footer>
            </>
    )
}