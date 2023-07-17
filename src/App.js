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
import ArticlesPagination from "./page/Articles/ArticlesPagination/ArticlesPagination";
import Article from "./page/Articles/Article/Article";
import Dashboard  from './page/Dashboard/Dashboard.jsx'
import Products from "./page/Products/Products";
import Product from "./page/Products/Product/Product";
import Login from "./page/Authentication/Login/Login";
import Register from "./page/Authentication/Register/Register";

const App = () => {
  return (
      <>
      <ScrollToTophg />
      <div className="app w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/LoginLearn" element={<LoginLearn />} />
          <Route path="/workSamples/graphic/MotionGraphics" element={<MotionGraphics />} />
          <Route path="/workSamples/graphic/UI_UX" element={<UI_UX />} />
          <Route path="/workSamples/graphic/Brochure" element={<Brochure />} />
          <Route path="/workSamples/graphic/Poster" element={<Poster />} />
          <Route path="/workSamples/graphic/Catalog" element={<Catalog />} />
          <Route path="/workSamples/graphic/BusinessCard" element={<BusinessCard />} />
          <Route path="/workSamples/graphic/Logo" element={<Logo />} />
          <Route path="/workSamples/Premiere" element={<Premiere />} />
          <Route path="/workSamples/web/WebsiteDesignPortfolio" element={<WebsiteDesignPortfolio />} />
          <Route path="/workSamples/Aplication" element={<Aplication />} />
          <Route path="/workSamples/Seo" element={<Seo />} />
          <Route path="/workSamples/Voicing" element={<Voicing />} />
          <Route path="/services/اپلیکیشن-موبایل" element={<Saplication />} />
          <Route path="/services/خدمات-تدوین-صدا-و-صدا-گذاری" element={<SsoundEditing />} />
          <Route path="/services/فروش-سایت-اختصاصی-و-اقتصادی" element={<EecoSaleWeb />} />
          <Route path="/services/طراحی-سایت-اختصاصی" element={<SsaleWebExclusive />} />
          <Route path="/services/فروش-قالب-سایت" element={<SsaleWeb />} />
          <Route path="/services/خدمات-سئو-وب-سایت" element={<Sseo />} />
          <Route path="/services/خدمات-کسب-و-کار" element={<SworkService />} />
          <Route path="/services/خدمات-شبکه-های-اجتماعی" element={<SsocialMedia />} />
          <Route path="/services/موشن-گرافیک" element={<SmotionGhraphic />} />
          <Route path="/services/تدوین-پروپوزال" element={<Sproposal />} />
          <Route path="/services/خدمات-پریمیر-و-تدوین-فیلم" element={<Spremier />} />
          <Route path="/services/خدمات-گرافیک" element={<Sgraphic />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/articles" element={<ArticlesPagination/>}/>
          <Route path="/articles/article" element={<Article/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/shop" element={<Products/>}/>
          <Route path="/shop/product/:id" element={<Product/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
      </>
  );
};

export default App;
