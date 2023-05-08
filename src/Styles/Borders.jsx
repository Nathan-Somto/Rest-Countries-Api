import React from  "react";
import { Link } from "react-router-dom";
function Borders({border}) {
    return(
        <Link className="border" to={`/country/${border}`}>{border}</Link>
    )
}

export default Borders;