import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
      <nav className='bg-slate-800 p-2'>
        <ul className='text-white flex justify-between text-3xl'>
          <div>
            <li className='nav-list ml-10'>
                <Link to='/'>Home</Link>
            </li>
          </div>
          <div className='flex'>
            <li className='nav-list mr-10'>
                <Link to='/about'>About</Link>
            </li>
            <li className='nav-list mr-10'>
                <Link to='/page1'>Page1</Link>
            </li>
            <li className='nav-list mr-10'>
                <Link to='/page2'>Page2</Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  }

  export default Navbar