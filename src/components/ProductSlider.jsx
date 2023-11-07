import { useContext } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import slugify from "slugify";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const [product]=useContext(ProductContext);
      const navigate = useNavigate();
  return (
    <section className="product-slider">
        <Slider {...settings}>
        {product.slice(4,12).map((item)=>(
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
          <Card className="border-0">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
              <Card.Title>
              <h5 onClick={() => {
                navigate(`/product/${slugify(item.title)}`);
                window.scrollTo(0, 0);
                }}>{item.title}</h5>
              </Card.Title>
              <div className="card-price">
                  <p>${item.price}</p>
              </div>
              <span>
              {item.description.slice(0,70)}...
              </span>
              </Card.Body>
          </Card>
      </div>
      ))}
        </Slider>
    </section>
  )
}

export default ProductSlider