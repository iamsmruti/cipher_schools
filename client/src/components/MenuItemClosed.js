import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MenuItemClosed = ({item}) => {
    const location = useLocation().pathname

    useEffect(() => {
        console.log(location)
    }, [location])

  return (
    <>
    {location === item.path ? <div className='flex flex-col items-center'>
        {item.Icon}
        <p className='mt-4'>{item.name}</p>
    </div> : <div className='flex flex-col items-center'>
        {item.Icon}
        <p>{item.name}</p>
    </div>}
    </>
  )
}

export default MenuItemClosed