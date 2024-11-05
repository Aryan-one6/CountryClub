import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { persons } from '../UserInfo/serviceProviderDetails';
import StarIcon from '@mui/icons-material/Star';


const ServiceProviderDetails = () => {

    const [redirect, setRedirect] = useState(false);
    const { ProviderId } = useParams();
    const [getUserData, setProviderData] = useState([])

    useEffect(() => {
        if (!ProviderId || ProviderId.trim() === "") {
            setRedirect(true);
        } else {
            const userData = persons.find(persons => persons.id == ProviderId.toString())
            setProviderData(userData)
        }
    }, []);

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            {
                getUserData ?
                    <>
                        <div className='sm:flex p-4'>
                            <div className='providerPortfolioImages w-full md:w-[30%] flex flex-wrap justify-center gap-5'>
                                <img src={getUserData?.profileImage} className='object-conatin w-[200px] md:w-[200px] border-2 border-white' />
                                <img src={getUserData?.profileImage} className=' object-conatin w-[150px] md:w-[200px] border-2 border-white' />
                                <img src={getUserData?.profileImage} className=' object-conatin w-[150px] md:w-[200px] border-2 border-white' />
                                <img src={getUserData?.profileImage} className=' object-conatin w-[150px] md:w-[200px] border-2 border-white' />
                                <img src={getUserData?.profileImage} className=' object-conatin w-[150px] md:w-[200px] border-2 border-white' />
                            </div>
                            <div className='text-white p-6 sm:w-[70%]'>
                                <div className='servicesAvailableAt'>
                                    <h1 className='text-2xl font-bold'>{getUserData?.name} Portfolio</h1>
                                    <div className='p-4'>
                                        <p className='flex items-center gap-1 font-semibold mb-1 text-yellow-500'><StarIcon sx={{ color: 'yellow' }} />Description Of Escort Services</p>
                                        <p>
                                            {getUserData?.description}
                                        </p>
                                    </div>
                                </div>
                                <div className='sm:flex gap-14'>
                                    <div className='mt-4'>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Language</div>
                                            <div className='w-2/3'>English(good), Hindi(Good)</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Orientation</div>
                                            <div className='w-2/3'>Bisexual</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Ethnicity</div>
                                            <div className='w-2/3'>Asian</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Age</div>
                                            <div className='w-2/3'>20</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Color</div>
                                            <div className='w-2/3'>White</div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Height</div>
                                            <div className='w-2/3'>154 cm / 5'11</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Bust</div>
                                            <div className='w-2/3'>Medium</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Somkes</div>
                                            <div className='w-2/3'>No</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>Nationality</div>
                                            <div className='w-2/3'>Indian</div>
                                        </div>
                                        <div className='flex gap-10 border-b-2 border-gray-500 w-[300px]'>
                                            <div className='w-1/3'>City</div>
                                            <div className='w-2/3'>New Delhi</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='servicesProvided p-6'>
                                    <h1 className='text-2xl font-bold text-yellow-500'>Services Provided : </h1>
                                    <div className='flex flex-col mt-4'>
                                        <ul>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='servicesProvided p-6'>
                                    <h1 className='text-2xl font-bold text-yellow-500'>Clients Review : </h1>
                                    <div className='flex flex-col mt-4'>
                                        <ul>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} />Best in Industry</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} />Professional Work</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                            <li className='flex items-center gap-2'><StarIcon sx={{ color: 'yellow' }} /> A-Level (5 Star Escort)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <h1>No User available</h1>
                    </>
            }
        </div>
    );
};

export default ServiceProviderDetails;
