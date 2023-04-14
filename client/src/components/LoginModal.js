import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../constants'

const LoginModal = ({setShowModal, setModalState}) => {
        
    const navigate = useNavigate()

    const customInput = {
      background: 'black',
      marginBottom: '0.7rem',
      padding: '0.5rem 1rem',
      border: 'none',
      outline: 'none',
      width: '500px',
      borderRadius: '10px'
    }
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

    const handleSubmitLogin = () => {
        console.log('first')

        axios.post(`${API_URL}/api/auth/login`, {
            password: password,
            email: email
        }).then((res) => {
            console.log(res)
            navigate('/profile')
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#272c36] outline-none focus:outline-none text-white">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5">
                        <h3 className="text-[28px]">
                        Signin
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
                    <div className='flex flex-col px-[150px] text-center items-center pb-10'>
                        <div className='flex'>
                        <img className='w-[35px]' src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png'/>
                        <p className='font-semibold text-[24px] ml-3'>CipherSchools</p>
                        </div>

                        <p className='mt-5'>Hey, Welcome!</p>
                        <p className='text-[14px] mt-1 text-slate-400'>Please provide your email and password to signin</p>

                        <div className='mt-10'></div>
                        <input onChange={(e) => setEmail(e.target.value)} style={customInput} placeholder='Email ID'/>
                        <input onChange={(e) => setPassword(e.target.value)} type='password' style={customInput} placeholder='Password'/>
                        <p className='text-right w-[100%] mr-[-30px] text-primary'>Forgot Password ?</p>

                        <button onClick={handleSubmitLogin} className='bg-primary w-[105%] py-2 rounded-md mt-5'>Signin</button>

                        <p>Don't have an account ? <button className='text-primary ml-2 mt-3' onClick={() => setModalState('register')}>Get Started</button></p>
                    </div>
                    {/*footer*/}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default LoginModal