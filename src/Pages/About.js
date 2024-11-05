import React from 'react'
import PeopleReviews from '../components/About/PeopleReviews'
import AboutImage from '../Images/About_Image.png'

const About = () => {
    return (
        <div className=' text-white p-4' id='AboutParentContainer'>
            <p className='text-4xl font-bold text-wrap w-[90%] p-4'>Country-Club was created to serve the needs of users and providers of adult services</p>
            <div className=' sm:flex sm:flex-row-reverse'>
                <div className=''>
                    <img src={AboutImage} alt='about image' />
                </div>
                <div className='w-3/4'>
                    <div className='mt-4 p-4'>
                        <p className='text-2xl font-semibold'>
                            What is it for?
                        </p>
                        <p>
                            Providers can list a detailed and information profile in Country spa where they can propose their time and companionship to others. Users of the site can then make contact directly. We do not act as an intermediary or play any role in any transaction which may eventually take place. We recommend you follow the local laws of the country in which you reside.
                        </p>
                    </div>
                    <div className='mt-4 p-4'>
                        <p className='text-2xl font-semibold'>
                            Why are we different?
                        </p>
                        <p>
                            We have spent a lot of time communicating with users and advertisers to produce a website which is as useful as possible. Features such as verified photos, user reviews, questions and SSL security all help this to happen. We want users and providers to find Country spa useful and are working hard to make that happen.
                        </p>
                    </div>
                </div>
            </div>


            <div className='mt-4 p-4' id='peopleReviews'>
                <PeopleReviews />
            </div>
        </div>
    )
}

export default About