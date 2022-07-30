import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const Plants = ({ title, image, date, id }) => {
    return (
        <motion.div className='bg-green-600 rounded-med w-2/5 py-4 pl-8 ml-20 flex items-center mt-5 mb-5 shadow-2xl'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <a href={`/search/${id}`} className='flex items-center'>
                <img src={image} className='w-20 h-20 rounded-full' />
                <h1 className='ml-5 text-white text-4xl'>{title}</h1>
                <h4 className='m-3 text-white text-xl flex p-8'>{date} </h4>
            </a>
        </motion.div>
    )
}

export default Plants