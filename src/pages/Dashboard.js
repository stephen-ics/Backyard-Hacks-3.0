import React from 'react'
import DashboardSection from '../components/DashboardSection'
import Grass from '../images/grass.png'


const Dashboard = () => {
  return (

    <div className='gap-2 flex flex-col justify-start w-full'>
      <div >
        <h1 className='text-4xl text-white bg-green-700/[.5] rounded-md ml-96 mr-96 mt-8 px-2.5 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 nav-list'>DASHBOARD</h1>
      </div>
      <div className='flex flex-wrap items-center w-full justify-center'>
        <DashboardSection title='Black Rose' date='started on XXXX' image={Grass} />
        <DashboardSection title='Eculyptus' date='started on XXXX' image={Grass} />
        <DashboardSection title='Aloe Vera' date='started on XXXX' image={Grass} />
        <DashboardSection title='Birch Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
        <DashboardSection title='Tree' date='started on XXXX' image={Grass} />
      </div>
    </div>
  )
}


export default Dashboard