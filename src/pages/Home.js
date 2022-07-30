import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import HomeSection from '../components/HomeSection'
import Grass from '../images/grass.png'


const Home = () => {
  return (
    <div>
      <div className="object-fill bg-[url('https://media.discordapp.net/attachments/1002432217164812288/1002832211038437496/unknown.png')] bg-no-repeat bg-cover h-full pb-20 mx-20">
        <div className='flex flex-coll justify-center items-center h-full'>
          <h1 className='mt-40 text-8xl w-2/5 p-5 bg-green-600/[.4] text-white text-center'>Title</h1>
        </div>
        <div className='p-5 px-10'>
          <Link to='/search'>
            <motion.button className="w-56 text-4xl text-white mt-32 rounded-3xl p-5 bg-green-600/[.3] border-green-400 border-solid border-2"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              Get Started
            </motion.button>
          </Link>
        </div>
        
      </div>
      <HomeSection title="title" subheading="Subheading" description="This is a good description" image={Grass} reversed={false}/>
      <HomeSection title="title" subheading="Subheading" description="This is a good description" image={Grass} reversed={true}/>
    </div>
  )
}

export default Home