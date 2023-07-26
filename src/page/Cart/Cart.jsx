import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DiscountForm from "../../Components/DiscountForm/DiscountForm";
import Table from '../../Components/Table/Table';
import UpdateCartButton from '../../Components/UpdateCartButton/UpdateCartButton';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  
  const addSignToMoney = (number) => {
    const options = {style: 'decimal'};
    return number.toLocaleString('fa-IR', options) + ' تومان';
  }

  const allPrice = (cart) => {
    let allPrice = 0;
    cart.map(item => allPrice += (item.price * item.quantity));
    return allPrice;
  }

  return (
    <div className="w-full">
      {
        cart.length > 0 ?
          <section className="container mx-auto bg-white shadow-black/5 p-7 my-10 shadow-xl">
            <Table/>
            <div className="sm:flex flex-row gap-4 items-center justify-between w-full mt-4">
              <UpdateCartButton/>
              <DiscountForm/>
            </div>
            <p className="font-black text-gray-600 mt-12">جمع کل سبد خرید</p>
            <div className="flex flex-row mt-4 text-gray-600 bg-gray-100 p-4">
              <div className="basis-1/2">
                <p className="pb-4">جمع جزء:</p>
                <p className="">مجموع:</p>
              </div>
              <div className="basis-1/2">
                <p className="pb-4">{addSignToMoney(allPrice(cart))}</p>
                <p className="font-black">{addSignToMoney(allPrice(cart))}</p>
              </div>
            </div>
            <button
              onClick={() => console.table(cart)}
              className="mt-4 sm:mb-0 basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/6 text-white py-3 font-bold w-full bg-blue-500 hover:bg-blue-600 px-3 rounded"
            >
              ثبت و ادامه جهت تسویه حساب
            </button>
          </section> :
          <section className="container mx-auto bg-white shadow-black/5 p-16 my-10 shadow-xl text-center">
            <p>سبد خرید شما در حال حاضر خالی است</p>
            <Link to={"#"} className="mt-10 text-white p-3 w-full block bg-blue-500 hover:bg-blue-600 rounded">بازگشت به
              فروشگاه</Link>
          </section>
      }
    </div>
  );
};

export default Cart;