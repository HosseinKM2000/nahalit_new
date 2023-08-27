import Cookies from "js-cookie";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Table from '../../Components/Cart/Table/Table';
import DiscountForm from "../../Components/DiscountForm/DiscountForm";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotLogined from "../../Components/NotLogined/NotLogined";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { getBaskets } from "../../features/cart/action";
import { getProducts } from "../../features/products/action";

const Cart = () => {
  const baskets = useSelector(state => state.cart.baskets);
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const location = useLocation()
  const urlPath = location.pathname;
  const products = useSelector(state => state.products.products);
  const Ids = baskets.map(basket => basket.product_id);
  const goalProducts = products.filter(product => Ids.includes(product.id) )
  const dispatch = useDispatch();
  // const userId = JSON.parse(Cookies.get("user")).id;
  
  useEffect(()=>{
    dispatch(getBaskets());
    dispatch(getProducts());
  },[])

  const addSignToMoney = (number) => {
    const options = {style: 'decimal'};
    return number.toLocaleString('fa-IR', options) + ' تومان';
  }

  const allPrice = (cart) => {
    let allPrice = 0;
    cart.map(item => allPrice += item.price);
    return allPrice;
  }

  return (
    <>
      <Helmet>
        <title>نهال آی تی | سبد خرید</title>
      </Helmet>
      <div className="w-full font-[shabnamThin]">
        {
          urlPath === '/userPage/cart'
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
        {
          loginStatus
          ?
          <div className="w-full">
          {
            baskets.length > 0 ?
              <section className={urlPath === '/userPage/cart' ? "container mx-auto bg-white" : "container w-[90%] mx-auto bg-white p-7 my-10"} style={{boxShadow:urlPath === '/userPage/cart' ? '0px 0px 0px 0px' : '0px 0px 3px 0px grey'}}>
                <Table goalProducts={goalProducts}/>
                <div className="sm:flex flex-row gap-4 items-center justify-end w-full mt-4">
                  <DiscountForm/>
                </div>
                <p className="font-black text-gray-600 mt-12">جمع کل سبد خرید</p>
                <div className="flex flex-row mt-4 text-gray-600 bg-gray-100 p-4">
                  <div className="basis-1/2">
                    <p className="pb-4">جمع جزء:</p>
                    <p className="">مجموع:</p>
                  </div>
                  <div className="basis-1/2">
                    <p className="pb-4">{addSignToMoney(allPrice(goalProducts))}</p>
                    <p className="font-black">{addSignToMoney(allPrice(goalProducts))}</p>
                  </div>
                </div>
                <button
                  onClick={() => console.table(baskets)}
                  className="mt-4 sm:mb-0 basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/6 text-white py-3 font-bold w-full bg-blue-500 hover:bg-blue-600 px-3 rounded"
                >
                  ثبت و ادامه جهت تسویه حساب
                </button>
              </section> :
              <section className="container mx-auto font-[shabnam] bg-white shadow-black/5 p-16 my-10 shadow-xl text-center">
                <p>سبد خرید شما در حال حاضر خالی است</p>
                <Link to={"#"} className="mt-10 font-[shabnamBold] text-white p-3 w-full block bg-blue-500 hover:bg-blue-600 rounded">بازگشت به
                  فروشگاه</Link>
              </section>
          }
          </div>
          :
          <NotLogined/>
        }
        {
          urlPath === '/userPage/cart'
          ?
          <></>
          :
          <footer className="mt-5 w-full">
            <Footer />
          </footer>
        }
      </div>
    </>
  );
};

export default Cart;