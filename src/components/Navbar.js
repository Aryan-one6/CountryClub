import React from 'react';
import logoImage from '../Images/logoImage.jpg';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="flex p-4 justify-between items-center bg-black" id='mainHeader'>
        <div className="companyLogoImage">
          <Link  to={'/'}>
          <img src={logoImage} className="h-14 w-28" alt="Logo" />
          </Link>
        </div>

        <div className='flex gap-2'>
          <Link to={'/Services'}>
          <button className="bg-indigo-500 h-10 flex items-center space-x-2 px-4 rounded text-white">
            Services
            <LanguageIcon sx={{ color: 'white' }} />
          </button>
          </Link>
          <button className="bg-indigo-500 h-10 flex items-center space-x-2 px-4 rounded text-white">
            SignIn
            <PersonIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
        <div className='flex items-center justify-center flex-wrap py-4 gap-4' id='searchFilter'>
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
    </>
  );
};
