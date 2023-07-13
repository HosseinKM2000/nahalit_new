import React from "react";
import AboutSite from "../../Components/AboutSite/AboutSite";
import CustomSlider from "../../Components/CustomSlider/CustomSlider";
import Details from "../../Components/Details/Details";
import Header from "../../Components/Header/Header";
import LotteryHomePage from "../../Components/LotteryHomePage/LotteryHomePage";
import News from "../../Components/News/News";
import OurProuduct from "../../Components/OurProuduct/OurProuduct";
import Search from "../../Components/Search/Search";
import ServicesHomePage from "../../Components/ServicesHomePage/ServicesHomePage";
import SliderSwiper from "../../Components/SliderSwiper/SliderSwiper";
import Footer from "../../Components/Footer/Footer";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Home = () => {
  return (
    <div className="w-[100vw]">
      <header>
        <div className="max-lg:hidden">
        <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <main>
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
          <CustomSlider />
        </section>
        <section className="my-[8rem] flex justify-center items-center">
          <AboutSite />
        </section>
        <section className="my-32">
          <OurProuduct />
        </section>
        <section className="mt-14">
          <CustomSlider />
        </section>
        <section className="mt-24">
          <News />
        </section>
        <section className="mt-14">
          <Details />
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
