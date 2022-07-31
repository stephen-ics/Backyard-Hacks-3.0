import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { classNames } from "../lib/cssTools";


import HomeSection from '../components/HomeSection'
import Grass from '../images/grass.png'


const Home = () => {
  return (
    <motion.section
      className={classNames(
        " md:items-center flex-col text-white",
      )}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: true }}
    >
    <div>
      <div className="object-fill bg-[url('https://media.discordapp.net/attachments/1002432217164812288/1002832211038437496/unknown.png')] bg-no-repeat bg-cover h-full pb-20 mx-20">
        <div className='flex flex-coll justify-center items-center h-full'>
          <h1 className='mt-40 text-8xl w-2/5 p-5 bg-green-600/[.4] text-white text-center'>PlantUp</h1>
        </div>
        <div className='p-5 px-10'>
          <Link to='/search'>
            <motion.button className="w-56 text-2xl text-white mt-32 rounded-3xl p-5 bg-green-600/[.3] border-green-400 border-solid border-2"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              Start Planting!
            </motion.button>
          </Link>
        </div>
        
      </div>
      <HomeSection title="Grow with your plant." description="Take pictures of your plants and we'll turn it into a timelapse for you!" image={Grass} reversed={false}/>
      <HomeSection title="Care for your plants." description="Learn about your plant and set care reminders for them!" image={Grass} reversed={true}/>
    </div>
    </motion.section>

  )
}


export default Home