import React, { useEffect, useState } from 'react';
import { client } from '../../UserInfo/ClientsReview';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const ClientReviewCard = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setUserData(client);
    }, []);

    return (
        <div>
            <div className='flex justify-between items-center px-4'>
                <div className='text-3xl text-yellow-500'>
                    What's New?
                </div>
                <div>
                    <button className='text-black px-2 rounded-md font-bold space-x-2 py-1 bg-yellow-500'>
                        <NewspaperIcon/>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='mt-4 px-1'>
                {Array.isArray(userData) && userData.length > 0 ? (
                    userData.map((person, id) => (

                        <div key={id} className="sm:p-4 p-2 text-white text-start border-2 border-gray-500">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className="font-bold text-sm mb-2">New Review for <span className='text-yellow-500'>{person.name}expert at Service</span> </h2>
                                </div>
                                <div>
                                    <FavoriteIcon sx={{ color: 'grey' }} />
                                </div>
                            </div>
                            <div className='flex items-start space-x-5'>
                                <div className='sm:w-[30%] flex items-center gap-2'>
                                    <img src={person.profileImage} alt='UserProfileImage' className='h-[100px] object-conatin border-2 border-white' />
                                </div>
                                <div className='w-full text-wrap text-start'>
                                    <p className='text-white mt-2'>{person.description.slice(0, 150)}...</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">No service provider details available.</p>
                )}
            </div>
        </div>
    )
}

export default ClientReviewCard