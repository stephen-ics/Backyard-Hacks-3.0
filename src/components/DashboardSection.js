import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const DashboardSection = ({ title, image, date, id }) => {
    return (
        <motion.div className='align-items-center bg-green-600 rounded-xl w-6/6 mt-16 ml-16 mr-16 flex items-center shadow-2xl'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <a href={`/search/${id}`} className='flex items-center flex-wrap'>
                <img src={image} className='p-0 rounded-tr-xl rounded-tl-xl w-96 h-32' />
                <h1 className='mt-5 ml-5 p-10 text-white text-4xl'>{title}</h1>
                <p className='m-3 text-white text-med'>{date} </p>
            </a>
        </motion.div>
    )
}

export default DashboardSection