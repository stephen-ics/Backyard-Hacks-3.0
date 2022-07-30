import React from 'react'
import DashboardSection from '../components/DashboardSection'
import Grass from '../images/grass.png'


const Dashboard = () => {
  return (
    <div className='grid grid-cols-4 gap-2 justify-start '>
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
  )
}


export default Dashboard