import { Link } from "react-router-dom"
import productbg from '../assets/img/productsbg.png'
import SingleProduct from "../components/SingleProduct"
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Products = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="products">
      <div className="section-fluid contain">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span><i className="fa-solid fa-angle-right"></i></span>
          <Link to={"/products "}>{t.products}</Link>
        </div>
        <div className="position-relative">
        <div className="about-img container-fluid">
          <img src={productbg} alt="" />
        </div>
        <div className="container">
          <h1>{t.products}</h1>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <SingleProduct/>
        </div>
      </div>
    </section>
  )
}

export default Products