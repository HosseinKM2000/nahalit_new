import React from 'react';
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainSlider from './MainSlider/MainSlider';
import Services from '../Services/Services';
import SecondSlider from './ThirdSlider/ThirdSlider';
import ThirdSlider from './ThirdSlider/ThirdSlider';
import Property from './Property/Property';
import Plans from './Plans/Plans';
import LastArticles from './LastArticles/LastArticles';
import Describe from './Describe/Describe';

function Home() {
    const [content,setContent] = useState(<MainSlider/>)
    const Criterion = useSelector(state=> state.dashboard.homeSwitch)
    useEffect(()=>{
        switch(Criterion)
        {
            case 'mainSlider' : setContent(<MainSlider/>)
            break
            case 'services' : setContent(<Services/>)
            break
            case 'secondSlider' : setContent(<SecondSlider/>)
            break
            case 'thirdSlider' : setContent(<ThirdSlider/>)
            break
            case 'property' : setContent(<Property/>)
            break
            case 'plans' : setContent(<Plans/>)
            break
            case 'lastArticles' : setContent(<LastArticles/>)
            break
            case 'describe' : setContent(<Describe/>)
            break
            default : setContent('آیتم وجود ندارد')
        }
    },[Criterion])

  return (
    <div className='w-full p-10'>
        {
            content
        }
    </div>
  )
}

export default Home;