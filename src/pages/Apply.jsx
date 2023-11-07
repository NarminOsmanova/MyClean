import { Link } from "react-router-dom"
import applyimg from '../assets/img/applyimg.png'
import { Modal } from "react-bootstrap"
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
const Apply = () => {
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        window.scrollTo(0,0)
    }

    const { language } = useContext(LanguageContext);
    const t = translations[language];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

  return (
   <section className="apply">
        <div className={`${isMobile && show ? 'mobile' : 'show'}`}>
        <div className="section-fluid">
            <div className="d-flex container">
            <Link to={"/"}>{t.home}</Link>
            <span className="d-none d-md-block"><i className="fa-solid fa-angle-right"></i></span>
            <Link to={"/service "} className="mx-5">{t.service}</Link>
            <span><i className="fa-solid fa-angle-right"></i></span>
            <Link to={"/apply"}>{t.apply}</Link>
            </div>
        </div>
        <div className="container-fluid contain">
            <div className="row">
                <div className="col-12 col-md-5 apply-part d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column flex-md-row">
                        <input type="text" name="" id="" className="form-control input mr" required placeholder={t.name}/>
                        <input type="text" name="" id="" className="form-control input" required placeholder={t.surname}/>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                        <input type="tel" name="" id="" className="form-control input mr" required placeholder="+994 55 000 00 00*"/>
                        <input type="email" name="" id="" className="form-control input" placeholder="E-mail"/>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                    <select name="" id="" className="select mr w-100">
                        <option value="">{t.type}</option>
                        <option value="">{t.type}</option>
                        <option value="">{t.type}</option>
                        <option value="">{t.type}</option>
                        <option value="">{t.type}</option>
                    </select>
                    <select name="" id="" className="select w-100">
                        <option value="">{t.cyear}</option>
                        <option value="">{t.cyear}</option>
                        <option value="">{t.cyear}</option>
                        <option value="">{t.cyear}</option>
                        <option value="">{t.cyear}</option>
                    </select> 
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                    <select name="" id="" className="select mr w-100">
                        <option value="">{t.brand}</option>
                        <option value="">{t.brand}</option>
                        <option value="">{t.brand}</option>
                        <option value="">{t.brand}</option>
                        <option value="">{t.brand}</option>
                    </select>
                    <input type="date" name="" id="" className="w-100 input"/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder={t.opinion} className="form-control input"></textarea>
                    <div  className="d-flex align-items-center mobile-design">
                        <h5>{t.apply}</h5>
                        <button onClick={handleShow} className="btn fw-bolder text-white fs-1">
                        <i className="fa-solid fa-arrow-trend-down"></i>
                        </button>
                        {show && !isMobile && (
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <h3 className="text-center">{t.application}</h3>
                                </Modal.Body>
                            </Modal>
                        )}
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                    <div className="container-img">
                        <img src={applyimg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        {show && isMobile && (
        <div className="apply-mobile container">
            <span onClick={()=>{handleClose()}} className="ps-5"><i className="fa-solid fa-angle-left"></i></span>
            <h3 className="d-flex justify-content-center align-items-center text-center">Müraciətiniz qəbul olundu!</h3>
        </div>
    )}
   </section>
   
  )
}

export default Apply