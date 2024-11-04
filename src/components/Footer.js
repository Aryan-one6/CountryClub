import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-black text-white p-6'>
            <div className=' flex items-center justify-start space-x-4 p-4 flex-wrap'>
                <Link to={'/'}>
                    <div className='text-yellow-500 border-r-2 border-gray-500 px-4 text-start'>Forum</div>
                </Link>
                <Link to={'/About'}>
                    <div className='text-yellow-500 border-r-2 border-gray-500 px-4 text-start'>About</div>
                </Link>
                <Link to={'/Blog'}>
                    <div className='text-yellow-500 border-r-2 border-gray-500 px-4 text-start'>Blog</div>
                </Link>
            </div>
            <div className=' text-sm p-6'>
                This website only allows adult individuals to advertise their time and companionship to other adult individuals. We do not provide a booking service nor arrange meetings. Any price indicated relates to time only and nothing else. Any service offered or whatever else that may occur is the choice of consenting adults and a private matter between them. In some countries, individuals do not legally have the choice to decide this; it is your responsibility to comply with local laws.
            </div>
            <div className='p-6'>
                All right reserved by
                <Link to={'/About'}>
                    <span className=' text-yellow-500'>@CountryClub</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer