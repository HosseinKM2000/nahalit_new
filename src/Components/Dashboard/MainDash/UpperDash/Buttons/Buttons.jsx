import React from 'react';
import { TbPlant } from 'react-icons/tb';
import { TiHome } from 'react-icons/ti';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <div className='flex items-center gap-3 text-2xl'>
        <TbPlant className='text-green-600 text-4xl'/>
        <Link to={'/'}><BsPersonFill className='text-[#dedede] duration-300 transition-all hover:text-[#fff]'/></Link>
        <Link to={'/'}><TiHome className='text-[#dedede] duration-300 transition-all hover:text-[#fff]'/></Link>
    </div>
  )
}

export default Buttons;