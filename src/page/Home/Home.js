import React, { useEffect } from "react";
import AboutSite from "../../Components/AboutSite/AboutSite";
import CustomSlider from "../../Components/CustomSlider/CustomSlider";
import Details from "../../Components/Details/Details";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LotteryHomePage from "../../Components/LotteryHomePage/LotteryHomePage";
import News from "../../Components/News/News";
import OurProduct from "../../Components/OurProduct/OurProduct";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import Search from "../../Components/Search/Search";
import ServicesHomePage from "../../Components/ServicesHomePage/ServicesHomePage";
import SliderSwiper from "../../Components/SliderSwiper/SliderSwiper";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/action";
import { getBlogs } from "../../features/dashboard/action";

const Home = () => {
  const products = useSelector(state => state.products.products);
  const blogs = useSelector(state => state.dashboard.blogs);
  let latestProducts = products.slice().reverse();
  let latestBlogs = blogs.slice().reverse().slice(0,3);
  let wordPressPlugins = products.filter(item => item.category_id === 14);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
    dispatch(getBlogs())
  },[])
console.log(latestBlogs)
  return (
    <div className="w-[100vw]">
      <Helmet>
        <title>نهال آی تی | صفحه اصلی</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
        <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <main className="container mx-auto">
        <section className="w-full">
          <SliderSwiper />
        </section>
        <section className="mt-5 max-lg:hidden">
          <Search />
        </section>
        <section className="mt-14">
          <LotteryHomePage />
        </section>
        <section className="mt-14">
          <ServicesHomePage />
        </section>
        <section className="mt-[8rem]">
          <CustomSlider title={"جدیدترین محصولات"} items={latestProducts}/>
        </section>
        <section className="my-[8rem] flex justify-center items-center">
          <AboutSite />
        </section>
        <section className="my-32">
          <OurProduct />
        </section>
        <section className="mt-14">
          <CustomSlider title={"قالب های وردپرسی"} items={wordPressPlugins}/>
        </section>
        <section className="mt-24">
          <News />
        </section>
        <section className="mt-14">
          <Details blogs={latestBlogs}/>
        </section>
        <div>
          <FixedIcon />
        </div>
      </main>
      <footer className="mt-5 w-full">
          <Footer />
      </footer>
    </div>
  );
};

export default Home;
