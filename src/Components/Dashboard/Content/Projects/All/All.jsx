import React from 'react';
import { Circle } from 'rc-progress';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function All({  currentItems , setShowDetails }) {
  
  return (
    <div className='w-full flex flex-col gap-3'>
        {
             currentItems.map((project,index) => (
                <div key={index} onClick={()=>setShowDetails({status:true,value:project})} className='w-full flex font-[shabnambold] text-sm transition-all hover:scale-[1.02] hover:opacity-90 cursor-default duration-300 items-center bg-[#ffffffc4] p-3 rounded-sm justify-between' style={{borderRight:`5px solid #${project.colorCode}`,boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
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
  )
}

export default All;

