import React, { useState } from 'react'

// React Icons
import { HiMenuAlt2 } from 'react-icons/hi'
import { AiOutlineCompass } from 'react-icons/ai'
import { FaAngleDown } from 'react-icons/fa'


import SearchComponent from './SearchComponent'
import NotificationIcon from './NotificationIcon'

const TopNav = () => {
  const [dropDown, setDropDown] = useState(false)

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  return (
    <div className='flex justify-between pr-6 py-3 border-b-slate-300 border-solid border-[0.5px]'>

       {/* Left Nav */}
        <div className='flex items-center'>
          <div className='text-[30px] px-6'>
            <HiMenuAlt2 />
          </div>

          <div className='flex items-center'>
            <img className='w-[35px]' src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png' />
            <p className='ml-3 font-semibold text-[22px]'>CipherSchools</p>
          </div>

          <div onClick={handleDropDown} className='flex ml-5 items-center cursor-pointer'>
            <AiOutlineCompass className='text-[20px]'/>
            <p className='ml-2'>Browse</p>
            <FaAngleDown className='ml-1'/>
          </div>
        </div>

        {/* Right Nav */}
        <div className='flex items-center'>
          <SearchComponent />
          <NotificationIcon notif={0}/>

          <div className='ml-6 cursor-pointer'>
            <img className='w-[30px]' src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' />
          </div>

          <div className='flex items-center ml-5'>
            <img className='w-5' src='https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg'/>
            <p className='ml-2 font-semibold text-primary text-[18px]'>0</p>
          </div>

          <div className='flex ml-5 items-center'>
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="flex items-center justify-between w-[35px] mt-[2px] ml-[5px] h-[20px] bg-white rounded-full peer peer-focus:ring-non dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-60">
                <div className=''>
                  🌜
                </div>
                <div className='pr-[1px]'>
                  🌞
                </div>
              </div>
            </label>
          </div>
        </div>
    </div>
  )
}

export default TopNav