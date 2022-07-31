import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SearchProfile = () => {
  const { id } = useParams();
  const [plantData, setPlantData] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:8000/PlantSection/' + id)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPlantData(data);
        });
    }, []);
  
  const handleSubmit = (e) => {
    const title = plantData.title
    const subtitle = plantData.subtitle
    const funFact = plantData.funFact
    const image = plantData.image
    const season = plantData.season
    const temperature = plantData.temperature
    const months = plantData.months
    const id = plantData.id
    const date = plantData.date

    e.preventDefault();
    const plant  = { title, funFact, subtitle, image, season, temperature, months, date, id };
    fetch('http://localhost:3001/DashboardSection', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plant)
    })
  }

  return (
    <div className='flex justify-center'>
      {plantData &&
      <div className='w-3/4 items-center justify-evenly mt-10'>
        <div className='flex bg-lime-600/[0.5] p-10 items-center w-full pt-20'> 
          <div className='flex flex-col w-full'>
            <div className='flex items-start justify-between'>
              <img src={plantData.image} className='rounded-full w-48 h-48 ml-20'/>
              <div className='flex flex-col bg-lime-800/[0.6] w-1/3 px-4 pt-8 mx-16 rounded-2xl h-72 items-start text-start'> 
                <h1 className='text-white text-5xl'>{plantData.title}</h1>  
                <h2 className='text-white text-lg'>{plantData.subtitle}</h2>
                <p className='text-white text-lg mt-6'>Fun Fact: {plantData.funFact}</p>
              </div>
              <div className='flex flex-col bg-lime-800/[0.6] px-4 pt-8 pb-16 rounded-2xl h-72 justify-around'>
                <h1 className='text-white text-xl'>{plantData.season}</h1>
                <h1 className='text-white text-xl'>{plantData.temperature}</h1>
                <h1 className='text-white text-xl'>{plantData.months}</h1>              
              </div>
            </div>
            <div className='w-full justify-around mt-10 text-white'>
              <motion.button className='w-1/2 py-6 px-8 bg-lime-800/[0.2] rounded-2xl border-green-800 border-solid border-2'
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              onClick={handleSubmit}>Add to Dashboard
              </motion.button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default SearchProfile

