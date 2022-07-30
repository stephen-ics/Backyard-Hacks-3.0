import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
      <nav className='bg-lime-600/[.4] p-3 m-5 mx-20 rounded-xl'>
        <ul className='text-white flex justify-between text-3xl items-center'>
          <div className="dark:md:nav-list mr-10 dark:md:hover:bg-green-700 transition duration-500 ease-in-out flex items-center" >    
            <li className='nav-list ml-2 mr-2 rounded-lg'>
                  <Link to='/'>Home</Link>
            </li>
          </div>
          <div className='flex items-center'>
            <li className='text-white bg-green-700/[.5] rounded-md text-sm px-5 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 nav-list mr-3 dark:md:hover:bg-green-700 transition duration-500 ease-in-out'>
                <Link to='/search'>Search</Link>
            </li>
            <li className='text-white bg-green-700/[.5] rounded-md text-sm px-5 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 nav-list mr-3 dark:md:hover:bg-green-700 transition duration-500 ease-in-out'>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className='text-white bg-green-700/[.5] rounded-md text-sm px-5 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 nav-list mr-3 dark:md:hover:bg-green-700 transition duration-500 ease-in-out'>
              <Link to='/completed'>Completed</Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  }

  export default Navbar