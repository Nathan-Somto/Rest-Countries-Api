import React from  "react";

function Borders({border,setName}) {
    return(
        <div className="border" onClick={e => setName(border)}>{border}</div>
    )
}

export default Borders;