import { Link } from "react-router-dom";

export default function Company(){
    return(
        <>
        
        <div className="about-section">
            <div className="company-img">
                <img src="/images/farmer.jpg" alt="" className="comapny-about-img" />
            </div>
          
            <div className="comapany-about-text">
            <div className="company-bg-box"></div>
                <h1>ABOUT</h1>
                <p>Resha Natural Agro Processing Company is a sugarcane & allied crop processing company producing health food ingredients as a prime product. Our innovative process involves extraction and enrichment of natural fiber from whole sugarcane plant. It can be added to human diet as functional food ingredient or food additive for nutritional benefits. Residue sugarcane juice is concentrated to make jaggery a traditional Indian sweetener. Company is launching its innovative product SAIFER-KN after 3 years of intensive R&D efforts by dedicated team of 12 technical persons under leadership of innovator & promoter of the company <b  style={{fontSize: "20px", color: "#030f03"}}>Mr. Ruturaj Gore.</b>  <br /><br />Company is located in traditional sugarcane rich belt of India in Maharashtra state. We have a dedicated team of experts in all aspects of cane processing & food technology. Our in house R&D set up not only help us to innovate new products & processes but it also improves our quality standards as ongoing process. Factory layout is designed over 25,000 sq.m area having separate production line for dietary fiber & jaggery. <br /><br /><br />
                1. Ruturaj Gore – Chief Promoter, Managing partner & Innovator Education – B.E.(Production Engineer), D.B.M. Diploma in Business Management. Experience – 15 years in operations of sugar factory, distillery & cogeneration plant. 12 years in developing ERP software & IT application for sugarcane processing units. Achievements – Key role in setting up solar power plant in national solar mission of India. <br />
                Development of innovative IT application for sugarcane processing units (15no.) Successful R&D to innovate process for manufacturing of dietary fiber from sugarcane. <br /><br />2. Anjali Gore – Promoter, Partner Education – B.Arch. (Architect, Product design) Experience – 15 years as Architect practitioner, layout & product design.  <br /><br />3. Arvind Gore – Advisor, Sugarcane processing operations.Experience – 40 years in sugar factory, distillery & cogeneration power unit. Achievements – 25 year leadership as Chairman of 2 sugar factories. Recipient of many state level awards for excellence by state & national government of India.  

                </p>
            </div>
        </div>
        <div className="company-icons">
        <i className="fa-regular fa-heart like"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>

        </div>
        </>
    )
}