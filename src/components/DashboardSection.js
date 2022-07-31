import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const DashboardSection = ({ plants }) => {
    return (
        <div className='rounded-xl w-96 m-4 mt-20 flex justify-center'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>

                {plants.map(plant => (
                    <motion.div
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}>

                        <div className='bg-green-600 mb-20 shadow-2xl rounded-xl w-96 mx-32'>
                            <Link to={`/dashboard/${plant.id}`}>   
                                <img src={plant.image} className='rounded-tr-xl rounded-tl-xl w-96'/>
                                <h1 className='text-white text-3xl pb-20 mt-6'>{plant.title}</h1>
                                <p className='text-white pb-10'>{plant.date} </p>
                            </Link>
                        </div>
                    </motion.div>
                ))}

        </div>
    )
}

export default DashboardSection