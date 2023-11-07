import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import blogbg from "../assets/img/blogbg.png";
import blogData from "../data/blogdata";
import slugify from "slugify";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

const BlogDetails = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const { slug } = useParams();
  const blogdetails = blogData.find((p) => slugify(p?.title) === slug);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <section className="blogdetails">
      <div className="section-fluid contain">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span className="d-none d-md-block">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link to={"/blog "} className="mx-5">
            {t.blog}
          </Link>
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link>{blogdetails.title}</Link>
        </div>
        <div className="position-relative">
          <div className="about-img container-fluid">
            <img src={blogbg} alt="" />
          </div>
          <div className="container">
            <h1>{blogdetails.title}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <span className="share">
          <i className="fa-solid fa-share-nodes"></i>
        </span>
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="blogdetails-img">
              <img src={blogdetails.img} alt="" />
            </div>
            <span>{blogdetails.description}</span>
            <div className="blogdetails-img blogdetails-img2">
              <img src={blogdetails.img1} alt="" />
            </div>
            <span>{blogdetails.description}</span>
          </div>
          <div className="col-12 col-md-4">
            <h3>Digər məqalələr</h3>
            {isMobile ? (
              <Slider {...settings} >
                { blogData.map((item, i) => (
                <Card className="border-0" key={i}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="pb-5">
                    <Card.Title>
                      <h3>{item.title.slice(0, 32)}...</h3>
                    </Card.Title>
                    <span>{item.description.slice(0, 90)}...</span>
                    <h5
                      onClick={() => {
                        navigate(`/blog/${slugify(item.title)}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Ətraflı
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </h5>
                  </Card.Body>
                </Card>
              ))}
              </Slider>
            ) : (
              blogData.map((item, i) => (
                <Card className="border-0" key={i}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>
                      <h3>{item.title.slice(0, 32)}...</h3>
                    </Card.Title>
                    <span>{item.description.slice(0, 90)}...</span>
                    <h5
                      onClick={() => {
                        navigate(`/blog/${slugify(item.title)}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Ətraflı{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </h5>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
