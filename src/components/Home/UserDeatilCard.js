import React, { useEffect, useState } from 'react';
import { persons } from '../../UserInfo/serviceProviderDetails';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

const UserDetailCard = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setUserData(persons);
    }, []);

    return (
        <div className='mt-16 px-1'>
            {Array.isArray(userData) && userData.length > 0 ? (
                userData.map((person,id) => (
                    <Link to={`/ServiceProvider/${person?.id}/${person?.name?.trim()}`}>
                    <div key={person?.id} className="border-none sm:p-4 p-2 mb-10 text-white rounded-lg shadow-md flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10" style={{ backgroundColor: 'rgb(252 181 1 / 16%)'}}>
                        <div className='sm:w-[30%] w-full sm:border-r-2 sm:border-gray-600 sm:px-1 sm:py-1 flex items-center gap-2'>
                            <div className='w-3/4'>
                                <img src={person?.profileImage} alt='UserProfileImage' className='h-[200px] w-[250px] object-conatin border-2 border-yellow-500'/>
                            </div>
                            <div className='w-1/4 flex flex-col gap-3'>
                                <img src={person?.profileImage} alt='UserProfileImage' className='h-[40px] object-cover border-2 border-yellow-500'/>
                                <img src={person?.profileImage} alt='UserProfileImage' className='h-[40px] object-cover border-2 border-yellow-500'/>
                                <img src={person?.profileImage} alt='UserProfileImage' className='h-[40px] object-cover border-2 border-yellow-500'/>
                                <img src={person?.profileImage} alt='UserProfileImage' className='h-[40px] object-cover border-2 border-yellow-500'/>
                            </div>
                        </div>
                        <div className='sm:w-[60%] w-full text-wrap'>
                            <h2 className="font-bold text-2xl">{person?.name}</h2>
                            <p className='text-white mt-2'>{person?.description}</p>
                            <div className='mt-2'>
                            <button className='text-yellow-500 px-2 rounded-md font-bold space-x-2 py-1' style={{backgroundColor:'#3d3d3d'}}>
                                See more & contact
                            </button>
                            </div>
                            <div className='flex justify-start items-center mt-2 space-x-1 '>
                                <a className='p-1' href='https://www.instagram.com/'>
                                    <InstagramIcon className='text-red-700 hover:scale-110 transition-transform duration-200' />
                                </a>
                                <a className='p-1' href={`tel:${person?.contactInfo.phoneNumber}`}>
                                    <CallIcon className='text-green-700 hover:scale-110 transition-transform duration-200' />
                                </a>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))
            ) : (
                <p className="text-white">No service provider details available.</p>
            )}
        </div>
    );
}

export default UserDetailCard;
