import React from "react";

const UpdateCartButton = () => {
  const handleUpdateCart = (e) => {}

  return (
    <button
      onClick={handleUpdateCart}
      className="mb-4 sm:mb-0 text-sm font-bold basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/6 text-white py-2 w-full bg-blue-500 hover:bg-blue-600 px-3 rounded">
      بروزرسانی سبد خرید
    </button>
  );
}

export default UpdateCartButton;