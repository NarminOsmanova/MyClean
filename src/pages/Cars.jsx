import { Link } from "react-router-dom"
import carbg from '../assets/img/carbg.png'
import SingleCar from "../components/SingleCar"
import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";


const Cars = () => {
  const [car] = useContext(CarContext);
  console.log(car);
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  return (
    <section className="cars">
       <div className="section-fluid contain">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span><i className="fa-solid fa-angle-right"></i></span>
          <Link to={"/cars "}>{t.cars}</Link>
        </div>
        <div className="position-relative">
        <div className="about-img container-fluid">
          <img src={carbg} alt="" />
        </div>
        <div className="container">
          <h1>{t.cars}</h1>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <SingleCar/>
        </div>
      </div>
    </section>
  )
}

export default Cars