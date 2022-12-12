import React from 'react';
import CountryCard from "./CountryCard";
function CountryContainer({data,setName}) {
   
    return(
        <div className="grid-Container">
          
            {data && data.map((item,id)=>{
                return <CountryCard 
                setName={setName}
                 key={`${item.name}-${id}`} 
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