import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import DashboardSection from '../components/DashboardSection'

const CompletedPlants = () => {
    const [plantData, setPlantData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:3002/CompletedSection')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setPlantData(data);
          });
      }, []);
  
    return (
      <motion.div
      initial = {{
        opacity:0,
      }}
      animate ={{
        opacity:1,
        transition:{
          duration: 1
        }
      }}
      exit = {{
        opacity: 0
      }}
      >
        <div className='flex flex-col justify-center w-full'>
            <div >
            <h1 className='text-4xl text-white bg-green-700/[.5] rounded-md ml-96 mr-96 mt-8 py-20 dark:focus:ring-gray-700 dark:border-gray-700'>Completed Plants</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
                {plantData && <DashboardSection plants={plantData} title='Completed Plants'/>}
            </div>
        </div>
      </motion.div>
    )
  }

export default CompletedPlants