import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Cars from "./pages/Cars";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Apply from "./pages/Apply";
import { CarProvider } from "./context/CarContext";
import ServiceDetails from "./pages/ServiceDetails";
import { LanguageProvider } from "./context/LanguageContext";
import ProductDetails from "./pages/ProductDetails";
import CarDetails from "./pages/CarDetails";
import { ProductProvider } from "./context/ProductContext";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CarProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/service/:slug" element={<ServiceDetails />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:slug" element={<ProductDetails />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/car/:slug" element={<CarDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </ProductProvider>
        </CarProvider>
      </LanguageProvider>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
