import { Link, useNavigate, useParams } from "react-router-dom"
import serviceimg from "../assets/img/about1.png";
import slugify from "slugify";
import servicesData from "../data/servicedata";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const ServiceDetails = () => {
    const navigate=useNavigate();
    const { slug } = useParams();
    const servicedetails = servicesData.find((p) => slugify(p.title) === slug);

    const { language } = useContext(LanguageContext);
    const t = translations[language];
  return (
    <section className="servicedetails">
         <div className="section-fluid">
            <div className="d-flex container">
            <Link to={"/"}>{t.home}</Link>
            <span className="d-none d-md-block"><i className="fa-solid fa-angle-right"></i></span>
            <Link to={"/service "} className="mx-5">{t.service}</Link>
            <span><i className="fa-solid fa-angle-right"></i></span>
            <Link>{language === "Az" ? servicedetails.title : servicedetails.titleEn}</Link>
            </div>
        </div>
      <div className="container-fluid contain">
        <div className="row">
           <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center">
            <div className="container-img">
              <img src={serviceimg} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-6 justify-content-center justify-content-md-start d-flex">
            <div className="container-text position-relative">
              <h3>{language ==="Az" ? servicedetails.title : servicedetails.titleEn}</h3>
              <span>
                {servicedetails.description}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contain about-part">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center">
            <div className="container-text position-relative">
              <span>
               {servicedetails.description}
              </span>
              <div className="d-flex align-items-center" onClick={()=>{navigate("/apply"); window.scrollTo(0,0)}}>
              <h5 >{t.apply}</h5>
              <button className="btn fw-bolder text-white fs-1">
                  <i className="fa-solid fa-arrow-trend-down"></i>
              </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end order-1 order-md-2">
            <div className="container-img">
              <img src={serviceimg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails