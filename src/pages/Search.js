import React from 'react'
import PlantSection from '../components/PlantSection'
import Grass from '../images/grass.png'

const Search = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <form className='w-3/4'>
        <input type='text' className='bg-white w-full pl-8 py-5 rounded-2xl' placeholder='Search for a Plant'></input>
      </form>
      <div className='flex flex-wrap'>
        <PlantSection title='title' image={Grass} id='1'/>
        <PlantSection title='title' image={Grass} id='2'/>
        <PlantSection title='title' image={Grass} id='3'/>
        <PlantSection title='title' image={Grass} id='4'/>
        <PlantSection title='title' image={Grass} id='5'/>
        <PlantSection title='title' image={Grass} id='6'/>
      </div>
    </div>
  )
}

export default Search