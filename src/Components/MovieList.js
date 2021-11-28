import React from "react";
import Example from "./Add";
import MovieCard from "./MovieCard";

function MovieList({movies}) {
    return (
<div>
    
        {movies.map (el=><MovieCard el={el} />)};
        {movies.map (el=><Example el={el} />)} 
</div>

    )
}
export default MovieList; 