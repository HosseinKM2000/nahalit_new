import React from "react";

const Search = () => {
  return (
    <div className="w-[100%] flex items-center justify-center my-10">
      <form className="flex md:w-[60%] 2xl:w-[30%] w-[90%] flex-row border-2 border-solid border-[#07B235] py-1 px-2 rounded-full">
        <select className="appearance-none text-stone-500 text-xs py-1 px-1 font-bold w-fit border-l-2 border-solid border-[#07B235] outline-none">
          <option className="px-1 text-center">محصولات</option>
          <option className="px-1 text-center">نوشته ها</option>
          <option className="px-1 text-center">محصولات و مطالب</option>
        </select>
        <input
          type="text"
          placeholder="دنبال چی میگردی؟"
          className="w-full py-1 px-5 text outline-0 placeholder:text-black placeholder:text-xs md:placeholder:text-md focus:placeholder:text-white transition-all  duration-500"
        />
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm  md:text-md md:px-8 bg-[#07B235] hover:bg-[#2ac954] transition-all duration-300 rounded-full text-white"
        >
          جستجو
        </button>
      </form>
    </div>
  );
};

export default Search;
