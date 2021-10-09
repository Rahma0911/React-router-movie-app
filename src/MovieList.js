import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({movies, searchTitle, searchRating}) => {

    return (
        <div className="movieList">
            {movies
            .filter(
                (el) =>
                el.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
                el.rating >= searchRating
            )
            .map((el) => 
            <MovieCard el={el} />
            )
            }
        </div>
    );
};
export default MovieList;