import React from 'react'
import PlantSection from '../components/PlantSection'
import Grass from '../images/grass.png'

const Search = () => {
  return (
    <div className='flex flex-wrap'>
      <PlantSection title='title' image={Grass}/>
      <PlantSection title='title' image={Grass}/>
      <PlantSection title='title' image={Grass}/>
      <PlantSection title='title' image={Grass}/>
      <PlantSection title='title' image={Grass}/>
      <PlantSection title='tile' image={Grass}/>
    </div>
  )
}

export default Search