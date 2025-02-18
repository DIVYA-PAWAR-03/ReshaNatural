import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <nav className="navbar">
                <div className="logo">
                    <h1>Reshanatural</h1>
                </div>
                <div>
                    <ul className="nav-links">
                        <li><Link  to={'/'}>HOME</Link></li>
                        <li><Link to={'/company'}>COMPANY</Link></li>
                        <li><Link to={'/'}>PRODUCTS</Link></li>
                        <li><Link to={'/'}>INNOVATION</Link></li>
                        <li><Link to={'/'}>CONTACT US</Link></li>
                    </ul>
                    </div>
            </nav>
        </header>
        
        
        </>
    )
}