import React from 'react';
import CountryCard from "./CountryCard";
function CountryContainer({loading,error,data,url,setUrl,setName}) {
   
    return(
        <div className="grid-Container">
            {loading && <h1>Loading...</h1>}
            {error && <h1>No result...</h1> }
            {data && data.map((item,id)=>{
                return <CountryCard 
                setName={setName}
                 key={`${item.name}-${id}`} 
                 url = {url}
                  setUrl={setUrl}
                  flag ={item.flag} 
                  capital ={item.capital} 
                  name ={item.name} 
                  population={item.population} 
                  region={item.region}/>
            })}
        </div>
    );
    
}

export default CountryContainer;