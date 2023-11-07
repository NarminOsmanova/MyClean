import Slider from "react-slick";
import blogData from "../data/blogdata";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate =useNavigate();
  return (
    <Slider {...settings}>
        {blogData.map((item,i)=>(
        <div className="row d-flex" key={i}>
            <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-4">
            <div className="blog-img">
              <img src={item.img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="blog-text">
              <h3>{item.title}</h3>
              <span>{item.description.slice(0,150)}...</span>
              <h5 onClick={() => {navigate(`/blog/${slugify(item.title)}`); window.scrollTo(0,0)}}>Ətraflı <span><i className="fa-solid fa-arrow-right"></i></span></h5>
            </div>
          </div>
          </div>
          )) }
      {/* {blogData.map((item,i) => (
         <div className="row d-flex" key={i}>
             <div className="col-12 col-md-6">
            <img src={item.img} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <h3>{item.title}</h3>
            <span>{item.description.slice(0, 150)}</span>
            <h5>
              Ətraflı
              <span>
                <i className="fa-solid fa-arrow-trend-down"></i>
              </span>
            </h5>
          </div>
         </div>
      ))} */}
    </Slider>
  );
};

export default BlogSlider;
