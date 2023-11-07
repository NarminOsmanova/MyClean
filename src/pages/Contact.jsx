import { Link } from "react-router-dom"
import contactbg from '../assets/img/contactbg.png'
import ContactPart from "../components/ContactPart"
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Contact = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="contact">
      <div className="section-fluid contain">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span><i className="fa-solid fa-angle-right"></i></span>
          <Link to={"/contact "}>{t.contact}</Link>
        </div>
        <div className="position-relative">
        <div className="about-img container-fluid">
          <img src={contactbg} alt="" />
        </div>
        <div className="container">
          <h1>{t.contact}</h1>
        </div>
        </div>
      </div>
      <ContactPart/>
    </section>
  )
}

export default Contact