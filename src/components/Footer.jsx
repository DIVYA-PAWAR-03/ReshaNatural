import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            <div className="footer-section">
                <div className="footer-logo-section">
                  <Link to={'/'}>
                  <img src="/images/resha-logo.webp" alt="" />
                  </Link>
                </div>
             <ul className="footer-links">
               <h4 className="quick-links">QUICK LINKS</h4>
             <li><Link to={'/homepage'}>Home</Link></li>
                <li><Link to={'/company'}>Company</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
                <li><Link to={'/motive'}>Innovation</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
             </ul>
             <div className="address-info">
                <div className="first-address-sec">
                <h4>FACTORY ADDRESS:</h4>
                <p>Survey no.- 92 bukanwadi, village - <br /> gorewadi, tal & dist. Osmanabad, <br /> 413509, Maharashtra state, India.</p>
                </div>
                <div className="second-address-sec">
                <h4>REGISTERED OFFICE:</h4>
                <p>Ruturaj 27/89 Anand Nagar, <br /> Osmanabad, 413501, Maharashtra state,<br /> India.</p>
                </div>
             </div>
             <div className="correspondance-address">
             <h4>CORRESPONDANCE ADDRESS:</h4>
                <p>1118 vidya-1, lakaki road, Model <br /> colony, Pune 411016, Maharashtra state, India. <br />
                mobile no:+91-9422465883</p>
                <div className="social-media-icons">
             <h4>CONNECT WITH US</h4>
              <div className="social-links">
             <i className="fa-brands fa-twitter twitter"></i>
            <i className="fa-brands fa-facebook facebook"></i>
            <i className="fa-brands fa-linkedin linkedin"></i>
            <i className="fa-brands fa-instagram instagram"></i>
            <i className="fa-brands fa-youtube youtube"></i>
            </div>
             </div>
             
             </div>
             </div>
            <div className="line-section">
               
            </div>
             <div className="bottom-bar">
               <p> <b>Copyright &copy; 2025 Reshanature All rights reserved. </b> </p>
             </div>
        </footer>
    )
}