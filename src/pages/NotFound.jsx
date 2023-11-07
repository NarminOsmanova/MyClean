import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const NotFound = () => {
    useEffect(()=>{
        const header=document.querySelector(".navbar");
        if (header) {
            header.style.display = "none";
          }
        const footer=document.querySelector(".footer");
        if (footer) {
            footer.style.display = "none";
          }
    },[])

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="notfound">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1>404</h1>
            <h2>{t.page}</h2>
            <div className="d-flex align-items-center">
            <a href={"/"}>{t.home}</a>
            <span className="ms-2"><i className="fa-solid fa-angle-right"></i></span>
            </div>
        </div>
    </section>
  )
}

export default NotFound