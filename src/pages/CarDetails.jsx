import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { CarContext } from "../context/CarContext";
import translations from "../data/langdata";
import slugify from "slugify";
import Slider from "react-slick";

const CarDetails = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [car] =useContext(CarContext);
  const { slug } = useParams();
  const cardetails = car?.find((p) => slugify(p?.title) === slug);

const settings = {
  customPaging: function (i) {
    return (
      <a href="/" key={i}>
        <img src={cardetails?.img[i]} alt="product" />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  return (
    <section className="cardetails">
      <div className="section-fluid">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span className="d-none d-md-block">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link to={"/cars"} className="mx-5">
            {t.cars}
          </Link>
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link>{cardetails?.title}</Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div className="container-text">
              <h3>{cardetails?.title}</h3>
              <h5>${cardetails?.price}</h5>
              <span>
                {cardetails?.description}
              </span>
             <div className="d-flex">
             <ul >
                <li>Şəhər</li>
                <li>Marka</li>
                <li>Model</li>
                <li>Buraxılış ili</li>
                <li>Ban növü</li>
                <li>Rəng</li>
                <li>Mühərrik</li>
                <li>Mühərrikin gücü</li>
                <li>Yanacaq növü</li>
                <li>Yürüş</li>
                <li>Sürətlər qutusu</li>
                <li>Ötürücü</li>
              </ul>
              <ul>
                <li>{cardetails?.city}</li>
                <li>{cardetails?.brand}</li>
                <li>{cardetails?.model}</li>
                <li>{cardetails?.year}</li>
                <li>{cardetails?.ban}</li>
                <li>{cardetails?.color}</li>
                <li>{cardetails?.engine}</li>
                <li>{cardetails?.enginepower}</li>
                <li>{cardetails?.fueltype}</li>
                <li>{cardetails?.march}</li>
                <li>{cardetails?.gearbox}</li>
                <li>{cardetails?.gear}</li>
              </ul>
             </div>
            </div>
            <div className="cardetails-tel d-flex d-md-none">
              <span><i className="fa-solid fa-phone"></i></span>
              <span>+994 50 xxx xx xx <br /> +994 55 xxx xx xx</span>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <div className="productdetails-img">
            <Slider {...settings}>
                {cardetails?.img.map((image, index) => (
                  <div key={index} className="product_img">
                    <img src={image} alt="" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="cardetails-tel d-none d-md-flex">
              <span><i className="fa-solid fa-phone"></i></span>
              <span>+994 50 xxx xx xx <br /> +994 55 xxx xx xx</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
