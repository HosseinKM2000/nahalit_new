import React , { useState } from 'react';
import SideDash from '../../Components/Dashboard/MainDash/SideDash/SideDash';
import ContentDash from '../../Components/Dashboard/MainDash/ContentDash/ContentDash';
import UpperDash from '../../Components/Dashboard/MainDash/UpperDash/UpperDash';
import { Helmet } from 'react-helmet';

function Dashboard() {
  const [dropMenu,setDropMenu] = useState(false);

  return (
    <div className='flex flex-wrap relative overflow-hidden h-screen w-screen'>
      <Helmet>
        <title>نهال آی تی | داشبورد</title>
      </Helmet>
      <UpperDash dropMenu={dropMenu} setDropMenu={setDropMenu}/>
      <SideDash dropMenu={dropMenu} setDropMenu={setDropMenu}/>
      <ContentDash/>
    </div>
  )
}

export default Dashboard;