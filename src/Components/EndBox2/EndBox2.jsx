import React from 'react';
import { motion } from 'framer-motion';

function EndBox2({ content }) {
  return (
    <motion.div initial={{translateY:200,opacity:0}} viewport={{once:true}} transition={{duration:1,delay:0.1}} whileInView={{translateY:0,opacity:1}} className='bg-green-72 py-10 px-3 flex flex-col sm:flex-row-reverse items-center justify-around'>
    <img src={content.img} alt="Service" className='w-[50%] sm:w-[20%]'/>
    <div className='w-[80%] flex flex-col items-center gap-5 2xl:gap-32'>
      <p className='service-text'>{content.p}</p>
      <button className='text-white bg-green-57C  w-72 text-base font-bold 2xl:py-3 2xl:w-[50rem] sm:w-[30rem] py-1 rounded-md hover:brightness-105 transition-all'>{content.b}</button>
    </div>
  </motion.div>
  )
}

export default EndBox2;
