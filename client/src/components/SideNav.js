import React from 'react'
import { IoMdLogOut } from 'react-icons/io'
import LoginModal from './LoginModal'

const SideNav = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleClick = (e) => {
    showModal ? setShowModal(false) : setShowModal(true)
  }
  return (
    <>
    <div className='flex flex-col items-center w-[70px] h-[calc(100vh-85px)] border-r-[0.5px] border-solid border-slate-300 transition-all bg-white'>
      <div onClick={handleClick} className='mt-auto flex flex-col items-center py-3 border-t-[0.5px] border-solid w-[100%] cursor-pointer'>
        <IoMdLogOut className='text-[32px]'/>
        <p className='text-[12px] mt-2'>Login</p>
      </div>
    </div>
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-[24px] font-semibold">
                    Scan QR Code to Download
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right mt-[-10px] leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-slate-500 h-6 w-6 text-[40px] block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid grid-cols-2 w-[600px]">
                  <div className='p-[30px]'>
                    <img className='mb-[20px]' src='/playStore.png' width={160}/>
                    <img src='/playstore_qr.png' className='m-auto'/>
                  </div>
                  <div className='p-[30px]'>
                    <img className='mb-[20px]' src='/appStore.png' width={160}/>
                    <img src='/appstore_qr.png' className='m-auto'/>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default SideNav