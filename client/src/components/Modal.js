import React, { useState } from 'react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const Modal = ({showModal, setShowModal, modalState, setModalState}) => {
  return (
    <>
      {(showModal && modalState === 'login') ? (
          <LoginModal setShowModal={setShowModal} setModalState={setModalState}/>
      ) : null}
      {(showModal && modalState === 'register') ? (
        <RegisterModal setShowModal={setShowModal} setModalState={setModalState}/>
      ) : null}
    </>
  )
}

export default Modal