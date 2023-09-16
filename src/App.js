import React from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./App.css";
import ApiLoading from "./Components/ApiLoading/ApiLoading";
import ScrollToTophg from "./Components/ScrollToTop/ScrollToTop";
import Aplication from "./page/Aplication/Aplication";
import Article from "./page/Articles/Article/Article";
import ArticlesPagination from "./page/Articles/ArticlesPagination/ArticlesPagination";
import Login from "./page/Authentication/Login/Login";
import Register from "./page/Authentication/Register/Register";
import Brochure from "./page/Brochure/Brochure";
import BusinessCard from "./page/Business_Card/BusinessCard";
import Cart from "./page/Cart/Cart";
import Catalog from "./page/Catalog/Catalog";
import ContactUs from "./page/ContactUs/ContactUs";
import Dashboard from './page/Dashboard/Dashboard.jsx';
import EecoSaleWeb from "./page/EecoSaleWeb/EecoSaleWeb";
import Error from "./page/Error/Error";
import Favorites from "./page/Favorites/Favorites";
import Home from "./page/Home/Home";
import LoginLearn from "./page/LoginLearn/LoginLearn";
import Logo from "./page/Logo/Logo";
import MotionGraphics from "./page/MotionGraphics/MotionGraphics";
import News from './page/News/News';
import Order from "./page/Order/Order";
import Poster from "./page/Poster/Poster";
import Premiere from "./page/Premiere/Premiere";
import Product from "./Components/Product/Product";
import Products from "./page/Products/Products";
import Recruitment from "./page/Recruitment/Recruitment";
import Saplication from "./page/S_Aplication/Saplication";
import Seo from "./page/Seo/Seo";
import Sgraphic from "./page/Sgraphic/Sgraphic";
import SmotionGhraphic from "./page/SmotionGhraphic/SmotionGhraphic";
import Spremier from "./page/Spremier/Spremier";
import Sproposal from "./page/Sproposal/Sproposal";
import SsaleWeb from "./page/SsaleWeb/SsaleWeb";
import SsaleWebExclusive from "./page/SsaleWebExclusive/SsaleWebExclusive";
import Sseo from "./page/Sseo/Sseo";
import SsocialMedia from "./page/SsocialMedia/SsocialMedia";
import SsoundEditing from "./page/SsoundEditing/SsoundEditing";
import SworkService from "./page/SworkService/SworkService";
import UI_UX from "./page/UI_UX/UI_UX";
import EditUserProfile from "./page/UserPanel/EditUserProfile";
import UserPage from "./page/UserPanel/UserPage";
import UserProfile from "./page/UserPanel/UserProfile";
import Voicing from "./page/Voicing/Voicing";
import WebsiteDesignPortfolio from "./page/WebsiteDesignPortfolio/WebsiteDesignPortfolio";
import About_us from "./page/About_us/About_us";
import BeSeller from "./page/BeSeller/BeSeller";
import CreateContent from "./page/CreateContent/CreateContent";
import SocialMediaBot from "./page/SocialMediaBot/SocialMediaBot";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
      <>
      <ScrollToTophg />
      <div className="app w-full">
        {/* toaster */}
        <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2500}
        className='Toast_info'
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="LoginLearn" element={<LoginLearn />} />
          <Route path="workSamples/graphic/MotionGraphics" element={<MotionGraphics />} />
          <Route path="workSamples/graphic/UI_UX" element={<UI_UX />} />
          <Route path="workSamples/graphic/Brochure" element={<Brochure />} />
          <Route path="workSamples/graphic/Poster" element={<Poster />} />
          <Route path="workSamples/graphic/Catalog" element={<Catalog />} />
          <Route path="workSamples/graphic/BusinessCard" element={<BusinessCard />} />
          <Route path="workSamples/graphic/Logo" element={<Logo />} />
          <Route path="workSamples/Premiere" element={<Premiere />} />
          <Route path="workSamples/web/WebsiteDesignPortfolio" element={<WebsiteDesignPortfolio />} />
          <Route path="workSamples/Aplication" element={<Aplication />} />
          <Route path="workSamples/Seo" element={<Seo />} />
          <Route path="workSamples/Voicing" element={<Voicing />} />
          <Route path="services/اپلیکیشن-موبایل" element={<Saplication />} />
          <Route path="services/خدمات-تدوین-صدا-و-صدا-گذاری" element={<SsoundEditing />} />
          <Route path="services/فروش-سایت-اختصاصی-و-اقتصادی" element={<EecoSaleWeb />} />
          <Route path="services/طراحی-سایت-اختصاصی" element={<SsaleWebExclusive />} />
          <Route path="services/فروش-قالب-سایت" element={<SsaleWeb />} />
          <Route path="services/خدمات-سئو-وب-سایت" element={<Sseo />} />
          <Route path="services/خدمات-کسب-و-کار" element={<SworkService />} />
          <Route path="services/خدمات-شبکه-های-اجتماعی" element={<SsocialMedia />} />
          <Route path="services/موشن-گرافیک" element={<SmotionGhraphic />} />
          <Route path="services/تدوین-پروپوزال" element={<Sproposal />} />
          <Route path="services/خدمات-پریمیر-و-تدوین-فیلم" element={<Spremier />} />
          <Route path="services/خدمات-گرافیک" element={<Sgraphic />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="articles" element={<ArticlesPagination/>}/>
          <Route path="articles/article" element={<Article/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path="shop?" element={<Products/>}/>
          <Route path="shop/product/:id" element={<Product/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="favorites" element={<Favorites/>}/>
          <Route path="userPage" element={<UserPage/>}>
            <Route path="editProfile" element={<EditUserProfile/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="userProfile" element={<UserProfile/>}/>
          </Route>
          <Route path="about_us" element={<About_us/>}/>
          <Route path="be_seller" element={<BeSeller/>}/>
          <Route path="create_content" element={<CreateContent/>}/>
          <Route path="SocialMediaBot" element={<SocialMediaBot/>}/>
        </Routes>
      </div>
      <ApiLoading/>
      </>
  );
};

export default App;
