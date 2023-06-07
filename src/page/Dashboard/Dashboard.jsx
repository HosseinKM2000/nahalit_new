import React from 'react';
import SideDash from '../../Components/Dashboard/SlideDash/SideDash';
import ContentDash from '../../Components/Dashboard/ContentDash/ContentDash';
import UpperDash from '../../Components/Dashboard/UpperDash/UpperDash';

function Dashboard() {
  return (
    <div className='flex flex-wrap w-full h-screen min-h-screen'>
      <UpperDash/>
      <SideDash/>
      <ContentDash/>
    </div>
  )
}

export default Dashboard;