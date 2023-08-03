import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setCart } from '../../features/cart/cartSlice';

const TableItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const addSignToMoney = (number) => {
    const options = {style: 'decimal'};
    return number.toLocaleString('fa-IR', options) + ' تومان';
  }

  return (
    <tr className="border flex flex-col w-[99%] sm:w-[45%] lg:flex-row lg:w-[100%] pb-3 mx-auto items-center justify-between pl-3 lg:py-1 hover:bg-[#eaeaea] bg-[#f4f4f4] text-gray-600 text-center">
      <td className="p-4">
        <div className="flex gap-10 items-center justify-center text-start">
          <div className="flex flex-col lg:flex-row  items-center gap-6">
            <Link to={"#"}>
              <img
                src={cartItem.thumbnail}
                className="h-auto w-[100px] lg:w-[50px] hover:opacity-70"
                alt={cartItem.title}
              />
            </Link>
            <div className='flex flex-col items-center lg:items-start w-full'>
              <Link className="block text-gray-600 line-clamp-2 text-center lg:text-start hover:text-blue-600" to={"#"}>{cartItem.title}</Link>
              {cartItem.seller && <span className='font-[shabnambold] mt-3'>فروشنده: {cartItem.seller.trim()}</span>}
            </div>
          </div>
        </div>
      </td>
      <div className='flex items-center flex-col lg:flex-row'>
      <td className="p-4">
        <span>{addSignToMoney(cartItem.price)}</span>
      </td>
      <td className="p-4">
        <input
          onChange={
            (event) => {
              const cartCopy = JSON.parse(JSON.stringify(cart));
              cartCopy.map(item => item.id === cartItem.id ? item.quantity = parseInt(event.target.value) : item)
              dispatch(setCart(cartCopy));
            }
          }
          type="number"
          className="bg-white border border-gray-300 p-2 text-gray-900 text-sm rounded w-[50px]" min={1}
          value={cartItem.quantity}
        />
      </td>
      <td className="p-4">
        <span>{addSignToMoney(cartItem.quantity * cartItem.price)}</span>
      </td>
      <div>
            <button
              onClick={() => dispatch(setCart(cart.filter(cart => cart.id !== cartItem.id)))}
              className="bg-red-500 hover:bg-red-600 h-fit w-fit p-1 text-white rounded"
              title="حذف"
            >
              <MdOutlineClose className='hidden lg:block'/>
              <span className='mx-3 block lg:hidden'>حذف از سبد خرید</span>
            </button>
      </div>
      </div>
    </tr>
  );
};

export default TableItem;
