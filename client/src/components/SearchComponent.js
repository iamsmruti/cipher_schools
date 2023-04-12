import React from 'react'

// React Icons
import { AiOutlineSearch } from 'react-icons/ai'
import { GoSettings } from 'react-icons/go'

const SearchComponent = ({setQuery}) => {
    const customInput = {
        border: 'none',
        outline: 'none',
        background: '#f3f5f9',
        margin: '0 1rem',
        width: '300px'
    }
    return (
        <div className='bg-lightestGrayShade px-5 py-2 flex items-center rounded-[20px]'>
            <AiOutlineSearch className='text-[20px]'/>
            <input onChange={(e) => setQuery(e.target.value)} type='text' style={customInput}/>
            <GoSettings className='text-[20px]'/>
        </div>
    )
}

export default SearchComponent