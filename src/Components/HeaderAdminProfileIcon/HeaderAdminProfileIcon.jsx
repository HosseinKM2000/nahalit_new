import React from 'react'
import { Link } from 'react-router-dom'
import UserAvatarIcon from '../UserAvatar/UserAvatar'

function HeaderAdminProfileIcon({ showSlide13 , setShowSlide13 , userId  , loginStatus }) {
  return (
    <div className="relative">
        {
            loginStatus && userId === 1
            ?
            <>
            <Link to={'/userPage/userProfile'} onMouseEnter={()=>setShowSlide13(true)} onMouseLeave={()=>setShowSlide13(false)}>
            <UserAvatarIcon/>
            </Link>
            <div className={showSlide13 ? "box arrow-avatar" : "box arrow-avatar opacity-0 transition-all duration-300"}>
            پنل کاربری
            </div>
            </>
            :
            <></>
        }
    </div>
  )
}

export default HeaderAdminProfileIcon