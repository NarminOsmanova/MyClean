import { Link, useNavigate } from "react-router-dom";
import servicebg from "../assets/img/servicebg.png";
import serviceimg from "../assets/img/about1.png";
import servicesData from "../data/servicedata";
import slugify from "slugify";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Service = () => {
  const navigate=useNavigate();
  
  const { language } = useContext(LanguageContext);
  const t = translations[language];
 
  return (
    <section className="service">
      <div className="section-fluid contain">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link to={"/service "}>{t.service}</Link>
        </div>
        <div className="position-relative">
          <div className="about-img container-fluid">
            <img src={servicebg} alt="" />
          </div>
          <div className="container">
            <h1>{t.service}</h1>
          </div>
        </div>
      </div>
     {servicesData.map((item,i)=>(
      <div className="container service-part" key={i}>
        <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="container-img">
            <img src={serviceimg} alt="" className="img-fluid"/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="container-text">
            <h3 onClick={() => {navigate(`/service/${slugify(item.title)}`);window.scrollTo(0,0)}}>{language==="Az" ? item.title : item.titleEn}</h3>
            <span>
              {item.description.slice(0,256)}
            </span>
            <div className="d-flex align-items-center" onClick={()=>{navigate("/apply"); window.scrollTo(0,0)}}>
              <h5 >{t.apply}</h5>
              <button className="btn fw-bolder text-white fs-1">
                  <i className="fa-solid fa-arrow-trend-down"></i>
              </button>
              </div>
          </div>
        </div>
        </div>
      </div>
     )) }

    </section>
  );
};

export default Service;