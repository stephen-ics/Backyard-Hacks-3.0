import React from 'react'
import Grass from '../images/grass.png'
import RoseSection from '../components/RoseSection'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import SearchProfile from './SearchProfile'

const PlantProfile = () => {
  const { id } = useParams();
  const [plantData, setPlantData] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:3001/DashboardSection/' + id)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPlantData(data);
        });
    }, []);

    console.log(plantData)

  return (
  
  <div className=''>
    {plantData &&
    <div className='flex justify-center'>
      <div className='w-3/4 items-center justify-evenly mt-10'>
        <div className='flex bg-lime-600/[0.5] p-10 items-center w-full pt-20'> 
          <div className='flex flex-col w-full'>
            <div className='flex items-start justify-between'>
              <img src={plantData.image} className='rounded-full w-48 h-48 ml-20'/>
              <div className='flex flex-col bg-lime-800/[0.6] w-1/3 px-4 pt-8 mx-16 rounded-2xl h-72 items-start text-start'> 
                <h1 className='text-white text-5xl'>{plantData.title}</h1>  
                <h2 className='text-white text-xl'>{plantData.subtitle}</h2>
                <p className='text-white text-xl mt-6'>Fun Fact: {plantData.funFact}</p>
              </div>
              <div className='flex flex-col bg-lime-800/[0.6] px-4 pt-8 pb-16 rounded-2xl h-72 justify-around'>
                <h1 className='text-white text-xl'>{plantData.season}</h1>
                <h1 className='text-white text-xl'>{plantData.temperature}</h1>
                <h1 className='text-white text-xl'>{plantData.months}</h1>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}


    <div>
      <h1>LOL</h1>
    </div>
  </div>
  
  )
}

export default PlantProfile