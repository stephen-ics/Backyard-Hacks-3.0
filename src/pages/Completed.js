import React from 'react'
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
/*import orchid from "../images/"*/

const Completed = () => {
  const [isExploding, setIsExploding]= React.useState(false)

  return (
    <div>
        {/* <div className='mt-24 text-6xl w-2/5 p-5 rounded-md m-12 bg-green-800/[.4] text-white text-center'></div>
        <div className='mt-24 text-6xl w-2/5 p-5 rounded-md m-12 bg-green-800/[.4] text-white text-center'></div>
        <div className='mt-24 text-6xl w-2/5 p-5 rounded-md m-12 bg-green-800/[.4] text-white text-center'></div> */}
      
      <div className='flex flex-col items-center mx-auto mt-16 p-5 h-4/5 text-4xl w-2/5 bg-green-600/[.4] text-white text-center rounded-md'>
        <h1 className='mt-10'>Congratulations! You have finished growing your Tulip!</h1>
        <Link className='mt-8 bg-black/[.4] rounded-md overflow-visible text-xl' to={`/search`}>
          <motion.button 
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className='w-full h-full px-12 py-7'>
            Click here to browse more plants!
            {isExploding && <ConfettiExplosion/>}
          </motion.button>
        </Link>
        <Link className='mt-3 bg-black/[.4] rounded-md overflow-visible text-xl' to={`/dashboard`}>
          <motion.button 
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className='w-full h-full px-8 py-2'>
            Share
            {isExploding && <ConfettiExplosion/>}
          </motion.button>
        </Link>
        <img className="" src="_Pots.png" alt="plant" />
      </div>
    </div>
  )
}

export default Completed