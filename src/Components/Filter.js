import React from "react";
import MovieCard from "./MovieCard";

function Filter({movies}) {
    return (
<div>
        {movies.map (el=><MovieCard el={el.title} />)}
</div>

    )
}
export default Filter; 