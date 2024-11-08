import React from 'react';
import logoImage from '../Images/logoImage.jpg';
import PersonIcon from '@mui/icons-material/Person';
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
          <Link to={'/'}>
          <button className="bg-transparent h-10 flex items-center space-x-2 px-4 rounded text-white">
            Home
            {/* <LanguageIcon sx={{ color: 'white' }} /> */}
          </button>

          </Link>
          <Link to={'/Services'}>
          <button className="bg-transparent h-10 flex items-center space-x-2 px-4 rounded text-white">
            Services
            {/* <LanguageIcon sx={{ color: 'white' }} /> */}
          </button>

          </Link>
          <Link to={'/About'}>
          <button className="bg-transparent h-10 flex items-center space-x-2 px-4 rounded text-white">
            About
            {/* <LanguageIcon sx={{ color: 'white' }} /> */}
          </button>

          </Link>

          <button className="bg-yellow-500 h-10 flex items-center space-x-2 px-4 rounded text-white">
            {/* SignIn */}
            <PersonIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </>
  );
};
