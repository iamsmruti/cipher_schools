import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'

const NotificationIcon = ({notif}) => {
  return (
    <div className='ml-5 relative'>
        <IoMdNotificationsOutline className='text-[24px]'/>
        <div className='absolute top-[-12px] right-[-12px] bg-primary text-[12px] px-1 flex items-center text-white rounded'>
            {notif}
        </div>
    </div>
  )
}

export default NotificationIcon