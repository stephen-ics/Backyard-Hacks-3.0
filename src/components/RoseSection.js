import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import PlantProfile from '../pages/PlantProfile'

const RoseSection = ({ name, image, description, id}) => {
    return (
        <motion.div className='bg-green-600 rounded-xl w-1/5 m-16 flex items-center shadow-3xl'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Link to={'/rose'} className='flex'>
                <img src={image} className='p-0 rounded-tr-xl rounded-tl-xl w-full' />
                <h1 className='mt-5 ml-5 p-16 text-white text-4xl'>{name}</h1>
                <p className='m-3 text-white text-med'>{description} </p>
            </Link>
        </motion.div>
    )
}

export default RoseSection