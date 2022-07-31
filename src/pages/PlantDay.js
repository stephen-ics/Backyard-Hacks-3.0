import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './PlantDay.css'
import { motion } from 'framer-motion'
import TimelineData from '../data/TimelineData'

const PlantDay = () => {
  const { id, id2 } = useParams();
  const [plantData, setPlantData] = useState(TimelineData);

  const handleSubmit = (e) => {
    setPlantData(current => 
    current.map(obj => {
        console.log(obj.id)
        if (obj.id === id2) {
            return {...obj, date: obj.date, complete: true, id: obj.id}
        }
    }))

    e.preventDefault();
  }



  return (
    <div>
        <form className='flex flex-col justify-center items-center text-white text-4xl bg-lime-600/[0.5] mx-20 rounded-2xl'>
            <h1 className='text-7xl mt-20'>Day {id2}</h1>
            
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col h-96 justify-evenly items-start ml-64 w-full'>
                    <div className='flex'>
                        <h1 className='mr-40'>Water 8:00AM </h1>
                        <input type='checkbox' className='checkboxlg'/>
                    </div>
                    <div className='flex'>
                        <h1 className='mr-10'>Move Outside 9:00PM</h1>
                        <input type='checkbox' className='checkboxlg'/>
                    </div>
                    <div className='flex'>
                        <h1 className='mr-40'>Water 3:00PM</h1>
                        <input type='checkbox' className='checkboxlg'/>
                    </div>
                    <div className='flex'>
                        <h1 className='mr-40'>Water 9:00PM</h1>
                        <input type='checkbox' className='checkboxlg'/>
                    </div>
                </div>
                <label for='inputfile' className='p-20 bg-lime-800/[0.5] border-solid border-lime-900 border-2 mr-64'>Upload File</label>
                <input id='inputfile' type='file' className='hidden'/>
            </div>
            <Link to={`/dashboard/${id}`}>
                <motion.button 
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className='p-10 bg-lime-800/[0.5] rounded-xl px-20 m-5 mb-16'
                onClick={handleSubmit}>
                    Submit
                </motion.button>
            </Link>

        </form>
    </div>
  )
}

export default PlantDay