import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import logoImage from '../Images/logoImage.jpg';
import userProfile from '../Images/userProfileImage.jpg';

const Services = () => {
    return (
        <div className='sm:flex p-4'>
            <div className='providerPortfolioImages w-full md:w-1/3 flex flex-wrap justify-center gap-5'>
                <img src={userProfile} className='object-cover w-[150px] md:w-[200px]'/>
                <img src={logoImage} className=' object-cover w-[150px] md:w-[200px]'/>
                <img src={logoImage} className=' object-cover w-[150px] md:w-[200px]'/>
                <img src={userProfile} className=' object-cover w-[150px] md:w-[200px]'/>
                <img src={userProfile} className=' object-cover w-[150px] md:w-[200px]'/>
            </div>
            <div className='text-white p-6 sm:w-3/4'>
                <div className='servicesAvailableAt'>
                    <h1 className='text-2xl font-bold'>Available Now</h1>
                    <div className='p-4'>
                        <p className='flex items-center gap-1 font-semibold mb-1 text-yellow-500'><StarIcon sx={{ color: 'yellow' }} />AMBASSADOR HOTEL KHAN MARKET Escort Services</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className='p-4'>
                        <p className='flex items-center gap-1 font-semibold mb-1 text-yellow-500'><StarIcon sx={{ color: 'yellow' }} />AMBASSADOR HOTEL KHAN MARKET Escort Services</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className='p-4'>
                        <p className='flex items-center gap-1 font-semibold mb-1 text-yellow-500'><StarIcon sx={{ color: 'yellow' }} />AMBASSADOR HOTEL KHAN MARKET Escort Services</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className='p-4'>
                        <p className='flex items-center gap-1 font-semibold mb-1 text-yellow-500'><StarIcon sx={{ color: 'yellow' }} />AMBASSADOR HOTEL KHAN MARKET Escort Services</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                <div className='servicesProvided p-6'>
                    <h1 className='text-2xl font-bold'>OUR ESCORTS SERVICES</h1>
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
            </div>
        </div>
    )
}

export default Services