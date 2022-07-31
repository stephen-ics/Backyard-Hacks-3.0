import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const PlantProfile = ({ name, image, description}) => {
    return (
        <motion.div className='bg-green-600 rounded-xl w-1/5 m-16 flex items-center shadow-3xl'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <a href={`/search/${id}`} className='flex items-center flex-wrap'>
                <img src={image} className='p-0 rounded-tr-xl rounded-tl-xl w-full' />
                <h1 className='mt-5 ml-5 p-16 ml-8px text-white text-4xl'>{name}</h1>
                <p className='m-3 text-white text-med'>{description} </p>
            </a>
        </motion.div>
    )
}

export default PlantProfile