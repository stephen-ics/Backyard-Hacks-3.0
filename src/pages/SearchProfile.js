import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SearchProfile = () => {
  const { id } = useParams();
  const [plantData, setPlantData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/PlantSection' + id)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPlantData(data);
        });
    }, []);

  return (
  <div>
    {plantData.map(plant => (
      <div className='flex items-center w-full absolute'>
        <div className='text-4xl p-16 bg-white w-full mr-20 ml-20'>hi</div>
      </div>
    ))}
  </div>
)
}

export default SearchProfile

