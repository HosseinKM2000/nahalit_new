import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { RiWordpressFill } from "react-icons/ri";

function HeaderProductsLogo() {
  return (
    <div className="flex justify-center mt-10">
        <div>
        <div className="border-l-2 gap-1 border-dotted cursor-default border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
            <BsWordpress className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
            <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamthin] tracking-tighter">قالب وردپرس</p>
        </div>
        </div>
        <div>
        <div className="border-l-2 gap-1 border-dotted cursor-default border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
            <AiFillHtml5 className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
            <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">قالب html</p>
        </div>
        </div>
        <div>
        <div className="border-l-2 gap-1 cursor-default border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
            <RiWordpressFill className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
            <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">پلاگین وردپرس</p>
        </div>
        </div>
        <div>
        <div className="px-4 py-3 flex gap-1 cursor-default flex-col items-center justify-center">
            <FaAndroid className="text-[2rem] text-[#57C053]  hover:text-[#6ade66] transition-all duration-300" />
            <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">محصولات اپلیکیشن</p>
        </div>
        </div>
    </div>
  )
}

export default HeaderProductsLogo