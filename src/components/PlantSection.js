import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const PlantSection = ({ plants }) => {
    return (
    <div className='w-full items-center mt-10'>
        <div className='w-full'>
            {plants.map(plant => (
                <motion.div className='mb-20' key={plant.id}
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}>
                    <div className=''>
                        <Link to={`/search/${plant.id}`}>
                            <div className='w-full bg-lime-600/[.6] rounded-xl flex items-center p-8 justify-between'>
                                <img src={plant.image} className='rounded-full w-32 h-32'/>
                                <h1 className='text-white text-7xl ml-full w-full'>{plant.title}</h1>
                            </div>
                        </Link>
                    </div>
                    
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default PlantSection