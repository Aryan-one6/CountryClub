import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import logoImage from '../Images/logoImage.jpg';
import userProfile from '../Images/userProfileImage.jpg';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import RateReviewIcon from '@mui/icons-material/RateReview';

const Services = () => {
    return (
        <>
            <div className='flex items-center justify-center flex-wrap py-4 gap-6 mb-1 md:mb-10' id='searchFilter' style={{ background: 'linear-gradient(rgb(31 29 29), rgb(14 14 14))' }}>
                <button className='px-2 rounded-md font-bold flex gap-1 items-center py-1 bg-slate-700'>
                    <EmailIcon className=' hover:cursor-pointer' fontSize='medium' sx={{ color: 'white' }} />
                    <span className=' text-yellow-500'>Meassge</span>
                </button>
                <button className='px-2 rounded-md font-bold flex gap-1 items-center py-1 bg-slate-700'>
                    <CallIcon className=' hover:cursor-pointer' fontSize='medium' sx={{ color: 'white' }} />
                    <span className=' text-yellow-500'>Call</span>
                </button>
                <button className='px-2 rounded-md font-bold flex gap-1 items-center py-1'>
                    <LiveHelpIcon className=' hover:cursor-pointer' fontSize='medium' sx={{ color: 'white' }} />
                    <span className=' text-yellow-500'>Ask a question</span>
                </button>
                <button className='px-2 rounded-md font-bold flex gap-1 items-center py-1'>
                    <RateReviewIcon className=' hover:cursor-pointer' fontSize='medium' sx={{ color: 'white' }} />
                    <span className=' text-yellow-500'>Add a review</span>
                </button>
            </div>
            <div className='sm:flex p-4'>
                <div className='providerPortfolioImages w-full md:w-1/3 flex flex-wrap justify-center gap-5'>
                    <img src={userProfile} className='object-cover w-[150px] md:w-[200px]' />
                    <img src={logoImage} className=' object-cover w-[150px] md:w-[200px]' />
                    <img src={logoImage} className=' object-cover w-[150px] md:w-[200px]' />
                    <img src={userProfile} className=' object-cover w-[150px] md:w-[200px]' />
                    <img src={userProfile} className=' object-cover w-[150px] md:w-[200px]' />
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
        </>
    )
}

export default Services