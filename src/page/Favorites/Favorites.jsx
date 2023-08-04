import React from 'react';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';

function Favorites() {
    
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
            <div>
                <FixedIcon />
            </div>
      </main>
      <footer className="mt-5 w-full">
             <Footer />
      </footer>
    </div>
  )
}

export default Favorites;