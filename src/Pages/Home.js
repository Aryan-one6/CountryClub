import React from 'react'
import ServiceProvided from '../components/Home/ServiceProvided'
import UserDetailCard from '../components/Home/UserDeatilCard'
import ClientReviewCard from '../components/Home/ClientReviewCard'

const Home = () => {
  return (
    <div className=' flex'>
      <div id='homeBody' className='sm:p-10 p-4 w-full lg:w-[70%] flex flex-col'>
        <div className=' pb-7'>
        <ServiceProvided />
        </div>
        <div className='flex border-t-2 border-gray-400'>
          <UserDetailCard />
        </div>
      </div>
      <div className='hidden lg:w-[30%] lg:block'>
          <ClientReviewCard/>
      </div>
    </div>
  )
}

export default Home