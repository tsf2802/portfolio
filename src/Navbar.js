export default function Navbar() {
    return <nav className="nav">
        <a href="/" className='site-title'> 
        Taks Site
        </a>
        <u1>
            <CustomLink href="/projects"> Projects </CustomLink>
            <CustomLink href="/notes"> Notes </CustomLink>
            
        </u1>
    </nav>
}

function CustomLink({href,children, ...props}){
    
    const path = window.location.pathname
    return (
        <li className = {path === href ? "active" : ""} >
            <a href={href} {...props}> {children} </a>
        </li>
    )
}