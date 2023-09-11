import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import Main from './Main/Main';

function Favorites() {
  const location = useLocation();
  const urlPath = location.pathname;

  return (
    <>
      <Helmet>
        <title>نهال آی تی | علاقه مندی ها</title>
      </Helmet>
      <div className={ urlPath === '/userPage/favorites' ? "w-[100%]" : "w-[100vw]"}>
    {
      urlPath === '/userPage/favorites'
      ?
      <></>
      :
      <header>
          <div className="max-lg:hidden">
            <Header />
          </div>
          <div className="lg:hidden">
            <ResponseHeader/>
          </div>
      </header>
    }
    <main>
       <Main/>
    </main>
    {
      urlPath === '/userPage/favorites'
      ?
      <></>
      :
      <>
      <div>
          <FixedIcon />
      </div>
      <footer className="mt-5 w-full">
          <Footer />
      </footer>
      </>
    }
      </div>
    </>
  )
}

export default Favorites;