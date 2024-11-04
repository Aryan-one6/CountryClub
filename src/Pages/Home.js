import React from 'react'
import ServiceProvided from '../components/ServiceProvided'
import UserDetailCard from '../components/UserDeatilCard'

const Home = () => {
  return (
    <>
        <div id='homeBody' className='sm:p-10 p-4'>
          <ServiceProvided/>
          <UserDetailCard/>
        </div>
    </>
  )
}

export default Home