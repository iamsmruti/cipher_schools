import React from 'react'
import TopNav from './TopNav'

const Layout = ({children}) => {
  return (
    <>
        <TopNav />
        <div className='ml-[70px]'>{children}</div>
    </>
  )
}

export default Layout