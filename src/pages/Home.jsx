import homecar from "../assets/img/homecar.png";
import about from "../assets/img/about.png";
import ContactPart from "../components/ContactPart";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import ProductSlider from "../components/ProductSlider";
import CarSlider from "../components/CarSlider";
import ServiceSlider from "../components/ServiceSlider";
import BlogSlider from "../components/BlogSlider";


const Home = () => {
 const navigate=useNavigate()

 const { language } = useContext(LanguageContext);
 const t = translations[language];
        
  return (
    <section className="home">
      <div className="container main position-relative ">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-text">
              <h1 className=" animate__animated animate__fadeInUp animate__bounce animate__slow">
                {t.clean}
              </h1>
              <span className="animate__animated animate__fadeInUp animate__bounce animate__slow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </span>
              <div className="d-flex animate__animated animate__fadeInUp animate__bounce animate__slow">
                <h5>{t.more}</h5>
                <button className="btn btn-warning rounded-circle fw-bolder px-4" onClick={()=>{navigate("/about");window.scrollTo(0,0)}}>
                  <i className="fa-solid fa-arrow-right "></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="container-img animate__animated animate__fadeInRight animate__bounce animated__slow">
              <img src={homecar} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contain count">
        <div className="row">
          <div className="col-6 col-md-4">
            <h2>500+</h2>
            <h4>{t.customer}</h4>
          </div>
          <div className="col-6 col-md-4">
            <h2>700+</h2>
            <h4>{t.follower}</h4>
          </div>
          <div className="col-6 col-md-4">
            <h2>17+</h2>
            <h4>{t.year}</h4>
          </div>
        </div>
      </div>
      <div className="container about">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-text position-relative">
              <h1>
                {t.about}
              </h1>
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
              <div className="d-flex align-items-center"  onClick={()=>{navigate("/about"); window.scrollTo(0,0)}}>
                <h5>{t.more}</h5>
                <button className="btn fw-bolder text-white fs-1" >
                  <i className="fa-solid fa-arrow-trend-down"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="container-img1 animate__animated animate__fadeInRight animate__bounce animated__slow">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="container">
          <h1 className=" text-start text-md-center">Xidmətlər</h1>
          <div className="row">
            <ServiceSlider/>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <h1>{t.products}</h1>
          <Link to={"/products"} onClick={()=>{window.scrollTo(0,0)}} className="d-flex align-items-center mb-4 justify-content-end">Daha çox <span className="ms-3"><i className="fa-solid fa-arrow-trend-down"></i></span></Link>
          <div className="row">
            <ProductSlider/>
          </div>
        </div>
      </div>
      <div className="cars">
        <div className="container">
          <h1 className=" text-start text-md-center">{t.cars}</h1>
          <Link to={"/cars"} onClick={()=>{window.scrollTo(0,0)}} className="d-flex align-items-center mb-4 justify-content-end">Daha çox <span className="ms-3"><i className="fa-solid fa-arrow-trend-down"></i></span></Link>
          <div className="row">
            <CarSlider/>
          </div>
        </div>
      </div>
      <div className="blog contain">
        <div className="container">
          <h1>{t.blog}</h1>
            <BlogSlider/>
        </div>
      </div>
      <div className="contact contain">
          <h1 className="text-start text-md-center">{t.contact}</h1>
          <ContactPart/>
      </div>
    </section>
  );
};

export default Home;
