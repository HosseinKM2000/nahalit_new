import { Circle } from 'rc-progress';
import React from 'react';

function All({  currentItems , setShowDetails }) {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className='w-full flex 2xl:w-[70%] flex-col gap-5 mb-5'>
            <span className='w-full text-white font-bold'>تعداد پروژه ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
            <div className='w-full flex flex-row flex-wrap justify-center md:justify-start md:flex-col items-center gap-10 md:gap-3'>
                {
                    currentItems.map((project,index) => (
                        <div key={index} onClick={()=>setShowDetails({status:true,value:project})} className='w-[15rem] md:w-full flex gap-y-3 md:flex-row flex-col font-[shabnambold] text-sm transition-all hover:scale-[1.02] hover:opacity-90 cursor-default duration-300 items-center bg-[#ffffffc4] p-3 rounded-sm justify-between' style={{borderRight:mobile?'0px':`5px solid #${project.colorCode}`,borderTop:mobile?`5px solid #${project.colorCode}`:'0px',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
                            <span>{project.عنوان}</span>
                            <span>{project.سرپرست}</span>
                            <span>....تومان</span>
                            <span>
                                {
                                    project['درصد پیشرفت'] < 100
                                    ? "در حال انجام"
                                    : "تکمیل شده"
                                }
                            </span>
                            <Circle percent={project['درصد پیشرفت']} strokeWidth={10} trailWidth={10} strokeColor='#00FFCA' trailColor='#6F7883' className='h-[3rem]'/>
                            <span>{project['دسته بندی']}</span>
                            <span>1401/12/03</span>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default All;

