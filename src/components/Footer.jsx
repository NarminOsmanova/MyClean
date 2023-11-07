import { Link } from "react-router-dom";
import navbrand from "../assets/img/navbrand.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Footer = () => {
  
 const { language } = useContext(LanguageContext);
 const t = translations[language];

  return (
   <section className="footer">
     <div className="container ">
      <div className="row footer-top">
        <div className="col-12 col-md-3">
          <div className="brand">
            <img src={navbrand} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <ul>
            <li>
              <Link to={"/about"} onClick={()=>{window.scrollTo(0,0)}}>{t.about}</Link>
            </li>
            <li>
              <Link to={"/service"} onClick={()=>{window.scrollTo(0,0)}}>{t.service}</Link>
            </li>
            <li>
              <Link to={"/products"} onClick={()=>{window.scrollTo(0,0)}}>{t.products}</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <ul>
            <li>
              <Link to={"/cars"} onClick={()=>{window.scrollTo(0,0)}}>{t.cars}</Link>
            </li>
            <li>
              <Link to={"/blog"} onClick={()=>{window.scrollTo(0,0)}}>{t.blog}</Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={()=>{window.scrollTo(0,0)}}>{t.contact}</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-3 social">
          <p>{t.follow}</p>
          <span className="me-4">
            <i className="fa-brands fa-square-instagram"></i>
          </span>
          <span>
          <i className="fa-brands fa-square-facebook"></i>
          </span>
        </div>
      </div>
      
    </div>
    <div className=" container-fluid contain footer-bottom">
        <div>
          <span>{t.reserved}</span>
        </div>
      </div>
   </section>
  );
};

export default Footer;
