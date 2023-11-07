import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import { ProductContext } from "../context/ProductContext";
import slugify from "slugify";

const ProductDetails = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [product] =useContext(ProductContext);
  const { slug } = useParams();
  const productdetails = product.find((p) => slugify(p.title) === slug);

  return (
    <section className="productdetails">
      <div className="section-fluid">
        <div className="d-flex container">
          <Link to={"/"}>{t.home}</Link>
          <span className="d-none d-md-block">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link to={"/products"} className="mx-5">
            {t.products}
          </Link>
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <Link>{productdetails?.title}</Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1">
           <div className="container-text">
           <h3>{productdetails?.title}</h3>
            <h6>${productdetails?.price}</h6>
            <span>
              {productdetails?.description}
            </span>
           </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <div className="container-img">
                <img src={productdetails?.img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;