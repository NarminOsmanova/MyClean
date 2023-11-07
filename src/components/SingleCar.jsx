import { Card } from "react-bootstrap"
import { useContext } from "react"
import { CarContext } from "../context/CarContext";
import { useNavigate } from "react-router-dom"
import slugify from "slugify";


const SingleCar = () => {
    const [car] = useContext(CarContext);
    const navigate=useNavigate()
  return (
    <>
    { car.map((item)=>(
      <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
        <Card className="border-0">
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
      ))  }
    </>
  )
}

export default SingleCar