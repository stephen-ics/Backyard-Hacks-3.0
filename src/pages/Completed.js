import React from 'react'
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

/*import orchid from "../images/"*/

const Completed = () => {
  const [isExploding, setIsExploding]= React.useState(false)

  return (
    <div>
        {/* <div className='mt-24 text-6xl w-2/5 p-5 rounded-md m-12 bg-green-800/[.4] text-white text-center'></div>
        <div className='mt-24 text-6xl w-2/5 p-5 rounded-md m-12 bg-green-800/[.4] text-white text-center'></div>
        <div className='mt-24 text-6xl w-2/5 p-5 rounded-md m-12 bg-green-800/[.4] text-white text-center'></div> */}
      
      <div className='flex flex-coll justify-between items-center h-full'>
        <h1 className='mt-25 h-4/5 text-4xl w-2/5 p-5 bg-green-600/[.4] text-white text-center rounded-md m-12'>
          <h1 className='mt-10'>Congratulations! You have finished growing your Rose!</h1>
          <div className=' flex justify-center w-4/5 h-60 ml-10 mt-40 mb-10 bg-blue-600/[.4] rounded-md m-15'>
            <button className=' overflow: visible text-xl mt-6'>
              Click here to see your timeline!
              {isExploding && <ConfettiExplosion/>}
              </button>
          </div>
          </h1>
        <div className='mt-12 h-4/5 text-6xl w-2/5 p-5 bg-blue-600/[.4] text-white text-center rounded-md m-12'>
          
          </div>
          <h1 className='mt-12 h-4/5 text-6xl w-2/5 p-5 bg-red-600/[.4] text-white text-center rounded-md m-12'>Title</h1>
        </div>
      

    </div>
  )
}

export default Completed