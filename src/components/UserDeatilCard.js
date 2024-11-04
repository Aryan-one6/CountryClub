import React, { useEffect, useState } from 'react';
import { persons } from '../UserInfo/serviceProviderDetails';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';

const UserDetailCard = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setUserData(persons);
    }, []);

    return (
        <div className='mt-24 px-4'>
            {Array.isArray(userData) && userData.length > 0 ? (
                userData.map((person) => (
                    <div key={person.id} className="border sm:p-4 p-2 mb-4 text-white bg-yellow-600 rounded-lg shadow-md flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
                        <div className='sm:w-1/4 w-full'>
                            <img src={person.profileImage} alt='UserProfileImage' className='w-full h-auto rounded-lg' />
                        </div>
                        <div className='sm:w-3/4 w-full text-wrap'>
                            <h2 className="font-bold text-2xl">{person.name}</h2>
                            <p className='text-white'>{person.description}</p>
                            <div className='mt-2'>
                                <p className='font-semibold'>Contact details:</p>
                                <p>Phone: {person.contactInfo.phoneNumber}</p>
                                <p>Instagram: @{person.contactInfo.instagramId}</p>
                            </div>
                            <div className='flex justify-start items-center mt-2 space-x-1 '>
                                <a className='p-1' href='https://www.instagram.com/'>
                                    <InstagramIcon className='text-red-700 hover:scale-110 transition-transform duration-200' />
                                </a>
                                <a className='p-1' href='tel:+05890000111'>
                                    <CallIcon className='text-green-700 hover:scale-110 transition-transform duration-200' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-white">No service provider details available.</p>
            )}
        </div>
    );
}

export default UserDetailCard;
