import React from 'react';
import './component-styles/Timeline.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TimelineItem = ({ data, id }) => {
    console.log({data})
    console.log({id})

    return (
        <motion.div className="timeline-item"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}>
            <Link to={`/dashboard/${id}/${data.id}`}>
                <div className="timeline-item-content">
                    <h1 className='text-white text-5xl'>{data.date}</h1>
                </div>
            </Link>
        </motion.div>
    )
};

export default TimelineItem;

