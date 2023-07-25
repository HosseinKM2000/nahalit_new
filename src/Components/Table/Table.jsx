import React from "react";
import { useSelector } from "react-redux";
import TableItem from '../TableItem/TableItem';

const Table = () => {
  const cart = useSelector(state => state.cart.cart);
  
  return (
    <div className="relative overflow-x-auto">
      <table className="border border-gray-200 text-sm w-full min-w-300">
        <thead>
        <tr className="text-gray-500 bg-gray-200">
          <th className="p-2 min-w-[500px]">محصول</th>
          <th className="p-2 min-w-[100px]">قیمت</th>
          <th className="p-2 min-w-[100px]">تعداد</th>
          <th className="p-2 min-w-[100px]">جمع جزء</th>
        </tr>
        </thead>
        <tbody>
        {cart.map(cartItem => <TableItem key={cartItem.id} cartItem={cartItem}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
