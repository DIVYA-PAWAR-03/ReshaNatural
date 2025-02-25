import { Link } from "react-router-dom";
import '../css/home.css'
export default function Home() {
  return (
    <main>
      <div className="home-main-img">
        <img src="/images/home.jpg" alt="" className="home-page-img" />
      </div>
      <div className="overlap-heading-container">
        <h1 className="resha-box">
          <b>
            RESHA <br />
            Natural Agro <br />
            Processing Co.
          </b>
        </h1>
        <h1 className="natural-heading">
          Natural Dietary Fiber From Sugarcane by innovative process
        </h1>
      </div>
      <div className="resha-imp-points">
        <div className="resha-setup">
          <h3>R&D Set up</h3>
          <ol>
            <li>
              IT Set Up – Agricultural data base of 10000 sugarcane farmers in
              100 km radial distance for last 15 yrs. Developed effective IT
              tools for sugarcane development, harvesting & processing
              management. In house development of ERP system for sugarcane
              processing unit.
            </li>
            <br />
            <li>
              Laboratories Set Up – Establishmentent of lab team with training
              program for effective use of Soil Analysis lab, Water analysis
              lab, Sugar & Fiber analysis lab, distillery & microbial lab, Bio
              gas analysis lab.
            </li>
            <br />
            <li>
              Engineering Set Up – Established sugarcane processing set up with
              experienced engineering team & skilled technicians. Equipment
              designing, process set up & machinery modification.
            </li>
            <br />
            <li>
              Agriculture Set Up – Selection of sugarcane farm, Sugarcane
              development program & managing harvesting & transportation of
              sugarcane.
            </li>
          </ol>
        </div>
        <div className="resha-philosophy">
          <h3>Our philosophy is guided by three core principles:</h3>
          <ol>
            <li>
              Respect for Nature – We develop processes that harness the full
              potential of sugarcane without harming the environment. Our
              innovative techniques ensure that natural vitamins, minerals, and
              fibers remain intact, providing health benefits without chemical
              alteration.
            </li>
            <br />
            <li>
              Innovation with Purpose – We strive to redefine the role of
              sugarcane, moving beyond sugar production to create nutritional,
              fiber-rich alternatives that promote better health and well-being.
              By converting whole sugarcane into dietary fiber, we bridge the
              gap between tradition and modern nutritional science.
            </li>
            <br />
            <li>
              Sustainability & Responsibility – We are committed to zero-waste
              processing, ensuring that every part of the sugarcane plant is
              utilized efficiently. Our work supports thousands of farmers,
              promotes eco-friendly production, and contributes to a healthier,
              more sustainable food industry.
            </li>
          </ol>
        </div>
      </div>
      <div className="tradition-section">
       
        <div className="info-section">
          <div className="first-column-section">
            <h4>Tradition</h4>
            <p>
              Company is located in a traditional sugarcane rich belt of India,
              a country of origin of sugarcane. Cultivation of sugarcane is our
              traditional farming practice since generations. Over the years we
              have achieved excellence in sugarcane processing for manufacturing
              of sugar & other bi-products. We are associated with 10,000
              traditional sugarcane farmers for regular supply of quality
              sugarcane. Our experience in erection & operations of sugar
              factory, cogeneration power plant, distillery & ethanol plant,
              sugar ERP software development system provide us strong base to
              enter into new venture of manufacturing of dietary fiber from
              sugarcane.
            </p>
          </div>
          <div className="second-column-section">
            <h4>Innovation</h4>
            <p>
              Traditionally Sugarcane is known as a source of high calorie
              sugar. We have invented sugarcane processing technology that
              converts whole sugarcane plant into edible sugarcane powder as
              dietary fiber. Our innovation proves that sugarcane can also be a
              good source of dietary fiber. Sugarcane is one of the efficient
              photo synthesizer (can produce max. amount of biomass per unit
              area) crop in the world. It also contains many vital vitamin &
              minerals. Best available source of raw material combined with our
              innovative technology has a potential to offer best option for
              dietary fiber supplement to the world of nutrition. Our technology
              respects nature. We do not use any harmful chemicals in the
              process and process do not alter cell structure of plant material.
            </p>
          </div>
          <div className="third-column-section">
            <h4>Customer Satisfaction</h4>
            <p>
              Tradition & innovation is our base toward customer satisfaction.
              Devoted & inspired team of experts is our path for excellence. Our
              excellence & respect for customer leads us towards highest levels
              of customer satisfaction
            </p>
          </div>
          <div className="fourth-column-section">
            <h4>R&D PROGRAME AT AMBEDKAR SUGAR FACTORY</h4>
            <p>
              Innovator Mr. Ruturaj Gore, approached the sugar factory with an
              innovative idea to set up R&D programme regarding production of
              Sugarcane Dietary Fiber (SCDF) in year 2014. Chairman Mr. Arvind
              Gore & B.O.D. highly appreciated the concept & agreed to support
              for R&D Program . <br />
              Ambedkar Sugar Factory is one of the leading sugar factories of
              the Maharashtra state. The factory has received many awards for
              technical & management excellence. The factory apart from sugar
              manufacturing unit has installed distillery & ethanol project,
              cogeneration power project, solar power project, biogas project
              etc.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
