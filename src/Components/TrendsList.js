import React from "react";
import TrendsCarousel from "./TrendsCarousel";


function TrendsList({trends, setTrends}) {
    return (
<div>
        {trends.map (el=><TrendsCarousel el={el} />)};
</div>

    )
}
export default TrendsList; 