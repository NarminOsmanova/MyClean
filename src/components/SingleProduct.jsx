import { Card } from "react-bootstrap"
// import productimg from '../assets/img/productimg.png'
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import slugify from "slugify";

const SingleProduct = () => {
  const navigate=useNavigate();
  const [product] =useContext(ProductContext);
  return (
    <>
      {product.map((item)=>(
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
      ))}</> 
  )
}

export default SingleProduct