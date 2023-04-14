import React, { useState } from 'react'
import { IoMdLogOut } from 'react-icons/io'
import Modal from './Modal'

const SideNav = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalState, setModalState] = useState('login')

  const handleClick = (e) => {
    showModal ? setShowModal(false) : setShowModal(true)
    setModalState('login')
  }
  return (
    <>
    <div className='flex flex-col items-center w-[70px] h-[calc(100vh-85px)] border-r-[0.5px] border-solid border-slate-300 transition-all bg-white'>
      <div onClick={handleClick} className='mt-auto flex flex-col items-center py-3 border-t-[0.5px] border-solid w-[100%] cursor-pointer'>
        <IoMdLogOut className='text-[32px]'/>
        <p className='text-[12px] mt-2'>Login</p>
      </div>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal} setModalState={setModalState} modalState={modalState}/>
    </>
  )
}

export default SideNav