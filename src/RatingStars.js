import ReactStars from "react-rating-stars-component";
import React from "react";

function RatingStars({setSearchRating}){
const ratingChanged = (newRating) => {
    setSearchRating(newRating);
};

return(
<ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
/>);
}
export default RatingStars;