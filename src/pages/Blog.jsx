import { Link, useNavigate } from "react-router-dom"
import blogbg from '../assets/img/blogbg.png'
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import translations from "../data/langdata";
import blogData from "../data/blogdata";
import slugify from "slugify";

const Blog = () => {
  
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const navigate = useNavigate()

  return (
    <section className="blog">
      <div className="section-fluid contain">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span><i className="fa-solid fa-angle-right"></i></span>
          <Link to={"/products "}>{t.blog}</Link>
        </div>
        <div className="position-relative">
        <div className="about-img container-fluid">
          <img src={blogbg} alt="" />
        </div>
        <div className="container">
          <h1>{t.blog}</h1>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {blogData.map((item)=>(
            <>
            <div className="col-12 col-md-4">
            <div className="blog-img">
              <img src={item.img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="blog-text">
              <h3>{item.title}</h3>
              <span>{item.description.slice(0,150)}...</span>
              <h5 onClick={()=>{ navigate(`/blog/${slugify(item.title)}`); window.scrollTo(0,0)}}  >Ətraflı <span><i className="fa-solid fa-arrow-right"></i></span></h5>
            </div>
          </div>
          </>
          )) }
        </div>
      </div>
    </section>
  )
}

export default Blog