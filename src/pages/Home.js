import React from 'react'
import { Link } from 'react-router-dom'

import HomeSection from '../components/HomeSection'
import Grass from '../images/grass.png'


const Home = () => {
  return (
    <div>
      <div className="object-fill bg-[url('https://media.discordapp.net/attachments/1002432217164812288/1002832211038437496/unknown.png')] bg-no-repeat bg-cover h-full">
        <div className='flex flex-coll justify-center items-center h-full'>
          <h1 className='mt-24 text-6xl w-2/5 p-5 bg-green-600/[.4] text-white text-center'>Title</h1>
        </div>
        <div className='p-5 px-10'>
          <Link to='/search'>
            <button className="w-56 text-4xl mr-10 text-white mt-10 rounded-3xl p-5 bg-green-600/[.4]">
              Get Started
            </button>
          </Link>
        </div>
        
        </div>
        <HomeSection title="title" subheading="Subheading" description="This is a good description" image={Grass} reversed={false}/>
        <HomeSection title="title" subheading="Subheading" description="This is a good description" image={Grass} reversed={true}/>
    </div>
  )
}

export default Home