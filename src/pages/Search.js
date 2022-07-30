import React from 'react'
import PlantSection from '../components/PlantSection'
import Grass from '../images/grass.png'
import { useState, useEffect } from 'react'

const Search = () => {
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    fetch('https://localhost:8000/PlantSection')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPlantData(data);
        });
    }, []);

    console.log(plantData)

  return (
    <div className='flex w-full flex-col items-center'>
      <form className='w-3/4'>
        <input type='text' className='bg-white w-full pl-8 py-5 rounded-2xl' placeholder='Search for a Plant'></input>
      </form>
      <div className='flex flex-wrap'>
        {plantData && <div className='text-8x bg-black'>hi</div>}
      </div>
    </div>
  )
}

export default Search