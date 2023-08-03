import React from "react";
import { useSelector } from "react-redux";
import TableItem from '../TableItem/TableItem';

const Table = () => {
  const cart = useSelector(state => state.cart.cart);
  
  return (
    <div className="relative overflow-x-auto w-full">
      <table className="border border-gray-200 text-sm w-full min-w-300 flex flex-col">
        <thead className="w-full">
        <tr className="text-gray-500 bg-gray-200 hidden lg:flex w-full justify-between px-5">
          <th className="p-2">محصول</th>
          <div className="flex items-center gap-3 2xl:gap-16 xl:gap-12 lg:gap-12">
            <th className="p-2">قیمت</th>
            <th className="p-2">تعداد</th>
            <th className="p-2">جمع جزء</th>
          </div>
        </tr>
        </thead>
        <tbody className="flex flex-wrap lg:flex-col justify-start h-fit gap-y-8 py-3 w-full">
        {cart.map(cartItem => <TableItem key={cartItem.id} cartItem={cartItem}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
