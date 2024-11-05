import React from 'react'
import ServiceProvided from '../components/Home/ServiceProvided'
import UserDetailCard from '../components/Home/UserDeatilCard'
import ClientReviewCard from '../components/Home/ClientReviewCard'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-wrap py-4 gap-4 mb-1 md:mb-10' id='searchFilter' style={{ background: 'linear-gradient(rgb(31 29 29), rgb(14 14 14))' }}>
        <select name="location" id="location" className='py-2 rounded-md px-2 text-gray-600'>
          <option value="delhi">Delhi</option>
          <option value="noida">Noida</option>
          <option value="gurugram">Gurugram</option>
          <option value="new delhi">New Delhi</option>
        </select>
        <input type='text' className='border-2 border-black  rounded-lg focus:border-none py-1 text-center' placeholder='Search' />
        <button className=' bg-yellow-500 px-1 rounded-md font-bold space-x-2 py-1'>
          Search
          <SearchIcon className=' hover:cursor-pointer' fontSize='medium' sx={{ color: 'white' }} />
        </button>
      </div>
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
          <ClientReviewCard />
        </div>
      </div>
    </>

  )
}

export default Home