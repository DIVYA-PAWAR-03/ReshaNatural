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
                        <li><Link  to={'/homepage'}>HOME</Link></li>
                        <li><Link to={'/company'}>COMPANY</Link></li>
                        <li><Link to={'/products'}>PRODUCTS</Link></li>
                        <li><Link to={'/'}>INNOVATION</Link></li>
                        
                        <button className="contact-btn"><li><Link to={'/'}> <b> CONTACT US</b> </Link></li></button>
                    </ul>
                    </div>
            </nav>
        </header>
        
        
        </>
    )
}