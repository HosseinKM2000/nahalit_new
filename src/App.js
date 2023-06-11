import React from "react";
import Home from "./page/Home/Home";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Route, Routes } from "react-router-dom";
import Order from "./page/Order/Order";
import Recruitment from "./page/Recruitment/Recruitment";
import LoginLearn from "./page/LoginLearn/LoginLearn";
import MotionGraphics from "./page/MotionGraphics/MotionGraphics";
import UI_UX from "./page/UI_UX/UI_UX";
import Brochure from "./page/Brochure/Brochure";
import Poster from "./page/Poster/Poster";
import Catalog from "./page/Catalog/Catalog";
import BusinessCard from "./page/Business_Card/BusinessCard";
import Logo from "./page/Logo/Logo";
import Premiere from "./page/Premiere/Premiere";
import WebsiteDesignPortfolio from "./page/WebsiteDesignPortfolio/WebsiteDesignPortfolio";
import Aplication from "./page/Aplication/Aplication";
import Seo from "./page/Seo/Seo";
import Voicing from "./page/Voicing/Voicing";
import Saplication from "./page/S_Aplication/Saplication";
import SsoundEditing from "./page/SsoundEditing/SsoundEditing";
import EecoSaleWeb from "./page/EecoSaleWeb/EecoSaleWeb";
import SsaleWebExclusive from "./page/SsaleWebExclusive/SsaleWebExclusive";
import SsaleWeb from "./page/SsaleWeb/SsaleWeb";
import Sseo from "./page/Sseo/Sseo";
import SworkService from "./page/SworkService/SworkService";
import SsocialMedia from "./page/SsocialMedia/SsocialMedia";
import SmotionGhraphic from "./page/SmotionGhraphic/SmotionGhraphic";
import Sproposal from "./page/Sproposal/Sproposal";
import Spremier from "./page/Spremier/Spremier";
import Sgraphic from "./page/Sgraphic/Sgraphic";
import ContactUs from "./page/ContactUs/ContactUs";
import ScrollToTophg from "./Components/ScrollToTop/ScrollToTop";
import Error from "./page/Error/Error";
import News from  './page/News/News';
import Articles from "./page/Articles/Articles";
import Article from "./page/Articles/Article/Article";
import Dashboard  from './page/Dashboard/Dashboard.jsx'
import Products from "./page/Products/Products";
import Product from "./page/Products/Product/Product";

const App = () => {
  return (
      <>
      <ScrollToTophg />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/LoginLearn" element={<LoginLearn />} />
          <Route path="/MotionGraphics" element={<MotionGraphics />} />
          <Route path="/UI_UX" element={<UI_UX />} />
          <Route path="/Brochure" element={<Brochure />} />
          <Route path="/Poster" element={<Poster />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/BusinessCard" element={<BusinessCard />} />
          <Route path="/Logo" element={<Logo />} />
          <Route path="/Premiere" element={<Premiere />} />
          <Route path="/WebsiteDesignPortfolio" element={<WebsiteDesignPortfolio />} />
          <Route path="/Aplication" element={<Aplication />} />
          <Route path="/Seo" element={<Seo />} />
          <Route path="/Voicing" element={<Voicing />} />
          <Route path="/خدمات-اپلیکیشن-موبایل" element={<Saplication />} />
          <Route path="/خدمات-تدوین-صدا-و-صدا-گذاری" element={<SsoundEditing />} />
          <Route path="/فروش-سایت-اختصاصی-و-اقتصادی" element={<EecoSaleWeb />} />
          <Route path="/طراحی-سایت-اختصاصی" element={<SsaleWebExclusive />} />
          <Route path="/فروش-قالب-سایت" element={<SsaleWeb />} />
          <Route path="خدمات-سئو" element={<Sseo />} />
          <Route path="/خدمات-کسب-و-کار" element={<SworkService />} />
          <Route path="/خدمات-شبکه-های-اجتماعی" element={<SsocialMedia />} />
          <Route path="/خدمات-موشن-گرافیک" element={<SmotionGhraphic />} />
          <Route path="/تدوین-پروپوزال" element={<Sproposal />} />
          <Route path="/خدمات-پریمیر-و-تدوین-فیلم" element={<Spremier />} />
          <Route path="/خدمات-گرافیک" element={<Sgraphic />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/articles/article" element={<Article/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/shop" element={<Products/>}/>
          <Route path="/shop/product/:id" element={<Product/>}/>
        </Routes>
      </div>
      </>
  );
};

export default App;
