import { Rating } from '@mui/material';
// import Rating from "react-rating-stars-component";
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
  const [review,setReview] = useState([])
  useEffect(()=>{
     const url = `https://desolate-mesa-41652.herokuapp.com/review`;
     fetch(url)
     .then(res => res.json())
     .then(data => {
       setReview(data);
     })
  },[])
    return (
        <div style={{margin:"12"}}>
          <h3 style={{margin:"12"}}>Review System</h3>
           {
             review.map(item=><div>
             <div>
               <p> {item.coment} </p>
               <Rating name="half-rating" 
               defaultValue={item.rating}
                precision={0.5} />
             </div>
             </div>)
           }
        </div>
    );
};

export default Review;