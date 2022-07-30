import React from 'react'
import Plants from '../components/Plants'
import Grass from '../images/grass.png'


const Dashboard = () => {
  return (
    <div>
      <Plants title='Rose' date='started on XXXX' image={Grass} />
      <Plants title='Eculyptus' date='started on XXXX' image={Grass} />
      <Plants title='Grass' date='started on XXXX' image={Grass} />
      <Plants title='Tree' date='started on XXXX' image={Grass} />

    </div>
  )
}


export default Dashboard