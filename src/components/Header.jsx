import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <nav className="navbar">
                <div className="logo">
                   <Link to={'/'}><h1>Reshanatural</h1></Link> 
                </div>
                <div>
                    <ul className="nav-links">
                        <li><Link  to={'/homepage'}>HOME</Link></li>
                        <li><Link to={'/company'}>COMPANY</Link></li>
                        <li><Link to={'/products'}>PRODUCTS</Link></li>
                        <li><Link to={'/motive'}>INNOVATION</Link></li>
                        
                        {/* <button className="contact-btn"><li><Link to={'/contact'}> <b> CONTACT US</b> </Link></li></button> */}
                        <Link to={'/contact'}><button className="contact-btn"><b>CONTACT US</b></button></Link>
                    </ul>
                    </div>
            </nav>
        </header>
        
        
        </>
    )
}