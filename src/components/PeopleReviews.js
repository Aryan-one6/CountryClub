import React, { useEffect, useState } from 'react'
import {reviews} from '../UserInfo/UsersReviews'

const PeopleReviews = () => {

    const [getReview , setReview] = useState([])

    useEffect(()=>{
        setReview(reviews);
    },[])

  return (
    <div>
        <p className='text-4xl font-bold text-wrap w-[90%] p-4'>What are people saying?</p>
        {
            getReview.map((data,id)=>(
                <div className='border-l-4 border-l-yellow-600 mb-10 p-4' key={id}>
                    <p>{data.review}</p>
                    <p className='mt-5 text-gray-400'>{data.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default PeopleReviews