import { useContext } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import slugify from "slugify";
import { CarContext } from "../context/CarContext";
import { useNavigate } from "react-router-dom";

const ProductSlider = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
    const [car]=useContext(CarContext);
    const navigate = useNavigate();

  return (
    <section className="car-slider">
        <Slider {...settings}>
        { car.map((item)=>(
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                <Card className="border-0 ">
                <Card.Img variant="top" src={item.img[0]} />
                    <Card.Body>
                    <Card.Title>
                        <h3 onClick={() => {navigate(`/car/${slugify(item.title)}`); window.scrollTo(0,0)}}>{item.title}</h3>
                    </Card.Title>
                    <div className="card-price">
                        <p>${item.price}</p>
                    </div>
                    <span>
                        {item.description.slice(0,90)}...
                    </span>
                    </Card.Body>
                </Card>
            </div>
        )) }
        </Slider>
    </section>
  )
}

export default ProductSlider