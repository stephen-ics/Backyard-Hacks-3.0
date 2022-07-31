import React from 'react'
import PlantSection from '../components/PlantSection'
import { useState, useEffect } from 'react'

const Search = () => {
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/PlantSection')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPlantData(data);
        });
    }, []);

  return (
    <div className='flex w-full flex-col items-center'>
      <form className='w-3/4'>
        <input type='text' className='bg-white w-full pl-8 py-5 rounded-2xl' placeholder='Search for a Plant'></input>
      </form>
      <div className='flex flex-row w-3/4'>
        {plantData && <PlantSection plants={plantData} />}
      </div>
    </div>
  )
}

export default Search