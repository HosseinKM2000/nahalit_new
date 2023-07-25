import React from 'react';
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
    <tr className="border hover:bg-gray-50 text-gray-600 text-center">
      <td className="p-4">
        <div className="flex gap-10 items-center text-start">
          <div>
            <button
              onClick={() => dispatch(setCart(cart.filter(cart => cart.id !== cartItem.id)))}
              className="bg-red-500 hover:bg-red-600 py-1 px-3 text-white rounded"
              title="حذف"
            >
              x
            </button>
          </div>
          <div className="flex items-center gap-6">
            <Link to={"#"}>
              <img
                src={cartItem.thumbnail}
                className="h-auto max-w-[50px] hover:opacity-70"
                alt={cartItem.title}
              />
            </Link>
            <div>
              <Link className="block text-gray-600 hover:text-blue-600" to={"#"}>{cartItem.title}</Link>
              {cartItem.seller && <span>فروشنده: {cartItem.seller.trim()}</span>}
            </div>
          </div>
        </div>
      </td>
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
    </tr>
  );
};

export default TableItem;
