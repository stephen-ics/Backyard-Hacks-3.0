import React from 'react'
import { useParams } from 'react-router-dom'

const SearchProfile = () => {
  const { id } = useParams()

  return (
    <div className='flex items-center w-full absolute'>
      <div className='text-4xl p-4 bg-white w-full mr-20 ml-20'>
        <h1>{id}</h1>
      </div>
      
    </div>
  )
}

export default SearchProfile