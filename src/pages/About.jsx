import { Link } from "react-router-dom"
import aboutbg from '../assets/img/aboutbg.png'
import about1 from '../assets/img/about1.png'
import about2 from '../assets/img/about2.png'
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import translations from "../data/langdata"

const About = () => {
  
  const { language } = useContext(LanguageContext);
  const t = translations[language];
 
  return (
    <section className="about">
      <div className="section-fluid contain">
      <div className="d-flex container">
        <Link to={"/"}>{t.home}</Link>
        <span><i className="fa-solid fa-angle-right"></i></span>
        <Link to={"/about "}>{t.about}</Link>
      </div>
      <div className="position-relative">
      <div className="about-img container-fluid">
        <img src={aboutbg} alt="" />
      </div>
      <div className="container">
        <h1>{t.about}</h1>
      </div>
      </div>
      </div>
      <div className="container-fluid contain about-part">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-text position-relative">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut <br /> <br />Aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
            <div className="container-img">
              <img src={about1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contain">
        <div className="row">
           <div className="col-12 col-md-6 d-flex  justify-content-center justify-content-md-end order-2 order-md-1">
            <div className="container-img">
              <img src={about2} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <div className="container-text position-relative">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut <br /> <br /> Aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About