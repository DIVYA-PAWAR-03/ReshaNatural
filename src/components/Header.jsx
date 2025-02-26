import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {

  const [isNavOpen,setIsNavOpen] = useState(false)
  
  const handleNavChange = ()=>{
    if(window.innerWidth > 850){
      console.log(window.innerWidth);
      setIsNavOpen(false)
    }
    else{
      // console.log(window.innerWidth);
      setIsNavOpen((prev)=>!prev)
    }
  }

  useEffect(()=>{

    function handleResize(){
      if(window.innerWidth > 850){
        console.log(window.innerWidth);
        setIsNavOpen(false)
      } 
    }
    
    window.addEventListener("resize",handleResize)

    return ()=>{
      window.removeEventListener("resize",handleResize)
    }

  },[])
  
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
              

               
            </ul>
          </div>
          <div className="header-buttons">
          <Link to={"/contact"}>
                <button className="contact-btn">
                  <b>CONTACT US</b>
                </button>
              </Link>

              {/* <button id="theme-switch">
                {" "}
                <i className="fa-solid fa-moon"></i>{" "}
              </button> */}
              <button onClick={handleNavChange} className="hamburgur" id="hamburgur">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </button> 
          </div>
          
        </nav>

{isNavOpen && 
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
}

      </header>
    </>
  );
}
