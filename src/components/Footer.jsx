import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            <div className="footer-section">
             <div className="search-box">
                <input type="text"  placeholder="Search..."/>
             </div>
             <ul className="footer-links">
             <li><Link to={'/homepage'}>Home</Link></li>
                <li><Link to={'/company'}>Company</Link></li>
                <li><Link to={'/'}>Products</Link></li>
                <li><Link to={'/'}>Innovation</Link></li>
                <li><Link to={'/'}>Contact Us</Link></li>
             </ul>
             <div className="address-info">
                <div className="first-address-sec">
                <h4>FACTORY ADDRESS:</h4>
                <address>Survey no.- 92 bukanwadi, village - <br /> gorewadi, tal & dist. Osmanabad, <br /> 413509, Maharashtra state, India.</address>
                </div>
                <div className="second-address-sec">
                <h4>REGISTERED OFFICE:</h4>
                <address>Ruturaj 27/89 Anand Nagar, <br /> Osmanabad, 413501, Maharashtra state,<br /> India.</address>
                </div>
             </div>
             <div className="correspondance-address">
             <h4>CORRESPONDANCE ADDRESS:</h4>
                <address>1118 vidya-1, lakaki road, Model <br /> colony, Pune 411016, Maharashtra state, India. <br />
                mobile no:+91-9422465883</address>
             </div>
             </div>
             <div className="bottom-bar">
             <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
             </div>
        </footer>
    )
}