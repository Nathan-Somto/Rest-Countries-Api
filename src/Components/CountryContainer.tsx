import React from 'react';
import CountryCard from "./CountryCard";
function CountryContainer({loading,error,data,url,setUrl}) {
    return(
        <div className="CountryContainer">
            {loading && <h1>Loading...</h1>}
            {error && <h1>No result</h1> }
            {data && data.map((id)=>{
                return <CountryCard key={id} url = {url} setUrl={setUrl}/>
            })}
        </div>
    );
    
}

export default CountryContainer;