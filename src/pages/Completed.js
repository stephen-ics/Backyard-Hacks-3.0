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
      
      <div className='flex flex-col justify-center mx-auto mt-16 p-5 h-4/5 text-4xl w-2/5 bg-green-600/[.4] text-white text-center rounded-md'>
        <h1 className='mt-10'>Congratulations! You have finished growing your Rose!</h1>
        <div className='w-4/5 h-60 mt-5 mb-10 bg-blue-600/[.4] rounded-md bg-black'>
          <button className=' overflow: visible text-xl mt-6'>
            Click here to see your timeline!
            {isExploding && <ConfettiExplosion/>}
            </button>
        </div>
      </div>
    </div>
  )
}

export default Completed