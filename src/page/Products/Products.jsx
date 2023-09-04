import React from 'react';
import FixedIcon from '../../Components/FixedIcon/FixedIcon.js';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import Main from '../../Components/Products/Main/Main.jsx';
import Side from '../../Components/Products/Side/Side.jsx';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader.js';
import { useSelector } from 'react-redux';
import NotLogined from '../../Components/NotLogined/NotLogined.jsx';
import { Helmet } from 'react-helmet';

function Products() {
  const loginStatus = useSelector(state => state.authentication.loginStatus);

  return (
    <main className='w-full flex flex-col'>
        <header>
          <div className="max-lg:hidden">
            <Header />
          </div>
          <div className="lg:hidden">
            <ResponseHeader />
          </div>
        </header>
        {
          loginStatus 
          ?
          <div className='container mx-auto'>
            <div className='w-full flex lg:pr-0 lg:pl-5 lg:flex-row flex-col-reverse'>
              <Helmet>
                <title>نهال آی تی | محصولات</title>
              </Helmet>
              <Side/>
              <Main/>
            </div>
          </div>
          :
          <NotLogined/>
        }
        <div>
        <FixedIcon />
        </div>
        <footer>
          <Footer/>
        </footer>
    </main>
  )
}

export default Products;