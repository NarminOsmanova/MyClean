import Slider from "react-slick";
import servicesData from "../data/servicedata";
import slugify from "slugify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const ServiceSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    const navigate=useNavigate();
  
    const { language } = useContext(LanguageContext);
    const t = translations[language];
  return (
    <div className="service-slider">
        <Slider {...settings}>
          {servicesData.map((item,i)=>(
                <div key={i}>
                  <div className="service-img">
                    <img src={item.img} alt="" className="img-fluid"/>
                    <div className="overlay">
                    <h5 onClick={() => {navigate(`/service/${slugify(item.title)}`); window.scrollTo(0,0)}}>{language==="Az" ? item.title : item.titleEn}</h5>
                      <span>
                          {item.description.slice(0,56)}
                      </span>
                      <div className="d-flex align-items-center" onClick={()=>{navigate("/apply"); window.scrollTo(0,0)}}>
                          <h5 >{t.apply}</h5>
                          <button className="btn fw-bolder text-white fs-1">
                              <i className="fa-solid fa-arrow-trend-down"></i>
                          </button>
                      </div>
                    </div>
                   <div className="container-text">
                    <h5 onClick={() => {navigate(`/service/${slugify(item.title)}`); window.scrollTo(0,0)}}>{language==="Az" ? item.title : item.titleEn}</h5>
                    </div>
                  </div>
                </div>
          )) }
        </Slider>
    </div>
  )
}

export default ServiceSlider