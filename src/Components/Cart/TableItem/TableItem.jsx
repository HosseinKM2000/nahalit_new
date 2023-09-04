import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteBasket } from '../../../features/cart/action';

const TableItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const addSignToMoney = (number) => {
    const options = {style: 'decimal'};
    return number.toLocaleString('fa-IR', options) + ' تومان';
  }

  return (
    <tr className="border flex flex-col  lg:flex-row w-[100%] pb-3 mx-auto items-center justify-between pl-3 lg:py-1 hover:bg-[#f1f1f1] bg-[#f4f4f4] text-gray-600 text-center shadow">
      <td className="py-5 md:py-1  px-4">
        <div className="flex items-center justify-center text-start">
          <div className="flex flex-col lg:flex-row  items-center gap-6">
              <img
                src={cartItem.thumbnail}
                className="h-[100px] w-[100px] lg:h-[50px] lg:w-[50px] hover:opacity-70"
                alt={cartItem.title}
              />
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
      <div>
            <button
              onClick={() => dispatch(deleteBasket(cartItem.id))}
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
