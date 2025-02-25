import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to={"/"}>
              <h1>Reshanatural</h1>
            </Link>
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <Link to={"/homepage"}>HOME</Link>
              </li>
              <li>
                <Link to={"/company"}>COMPANY</Link>
              </li>
              <li>
                <Link to={"/products"}>PRODUCTS</Link>
              </li>
              <li>
                <Link to={"/motive"}>INNOVATION</Link>
              </li>
              

              {/* <div class="hamburgur" id="hamburgur">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div> */}
            </ul>
          </div>
          <div className="header-buttons">
          <Link to={"/contact"}>
                <button className="contact-btn">
                  <b>CONTACT US</b>
                </button>
              </Link>

              <button id="theme-switch">
                {" "}
                <i className="fa-solid fa-moon"></i>{" "}
              </button>
          </div>
        </nav>

        <nav className="responsive-nav" id="responsive-nav">
          <div className="responsive-links" id="responsive-links">
            <ul>
              <li>
                <Link to={"/homepage"}>HOME</Link>
              </li>
              <li>
                <Link to={"/company"}>COMPANY</Link>
              </li>
              <li>
                <Link to={"/products"}>PRODUCTS</Link>
              </li>
              <li>
                <Link to={"/motive"}>INNOVATION</Link>
              </li>
              <Link to={"/contact"}>
                <button className="contact-btn">
                  <b>CONTACT US</b>
                </button>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
