import { Link } from "react-router-dom";
import '../css/mainpage.css'

export default function   Mainpage() {
  return (
    <>
      <main>
        <div className="bg-box"></div>
        <div className="main-container">
          <div className="right-section-content">
            <h1>
              "Innovating Sugarcane for <br /> a Healthier Tomorrow"
            </h1>
            <p>
              "At Resha Naturals, we transform sugarcane beyond just sweetness— <br />
              crafting nutrition-packed dietary fiber and wholesome jaggery. 
              Rooted in tradition,<br /> driven by innovation, we bring you the best
              of nature for a healthier tomorrow."
            </p>
            
            <Link to={'/Motive'} className="motive-btn">Our Motive  <i class="fa-solid fa-arrow-right-long"></i> </Link>
          </div>
          <div className="left-section-image">
            <img src="/images/mainpage.png" className="main-img" />
          </div>
        </div>
      </main>
    </>
  );
}
