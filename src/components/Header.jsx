import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import navbrand from "../assets/img/navbrand.png";
import bar from "../assets/img/bar.png";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import headerimg from '../assets/img/headerimg.png'
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

function Header() {
  const [open, setOpen] = useState();

  //  Dil deyisdirme
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage); 
  };
  const t = translations[language];
  // console.log('Translation:', t);
  // console.log('lang:', language);
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="pb-3">
          <Container>
            <Navbar.Brand href="#">
              <img src={navbrand} alt="" />
            </Navbar.Brand>
            <div className="d-flex">
              <select value={language} className="d-none d-md-block" onChange={handleLanguageChange}>
                <option value="Az">Az</option>
                <option value="En">En</option>
              </select>
              <img src={bar} alt="" className="bar" onClick={() => setOpen(!open)} />
              <Navbar.Offcanvas
                className="vw-100"
                show={open}
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Container>
                  <Row>
                    <Col>
                    <Offcanvas.Header onClick={() => setOpen(false)}>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <i className="fa-solid fa-angle-left"></i>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Container fluid className="contain">
                    <Row>
                      <Col sm={12} md={6}>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <NavLink to="/" className="nav-link">{t.home}</NavLink>
                          <NavLink to="/about" className="nav-link">{t.about}</NavLink>
                          <NavLink to="/service" className="nav-link">{t.service}</NavLink>
                          <NavLink to="/products" className="nav-link">{t.products}</NavLink>
                          <NavLink to="/cars" className="nav-link">{t.cars}</NavLink>
                          <NavLink to="/blog" className="nav-link">{t.blog}</NavLink>
                          <NavLink to="/contact" className="nav-link">{t.contact}</NavLink>
                        </Nav>
                        <div className="nav-lang d-flex d-md-none">
                          <p onClick={() => handleLanguageChange({ target: { value: 'Az' } })}>Az</p>
                          <p onClick={() => handleLanguageChange({ target: { value: 'En' } })}>En</p>
                        </div>
                      </Col>
                      {/* <Col sm={12} md={6}>
                        <div className="container-img">
                          <img src={headerimg} alt="" />
                        </div>
                      </Col> */}
                    </Row>
                  </Container>
                </Offcanvas.Body>
                    </Col>
                  </Row>
                </Container>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
