import React from 'react';
import {Link} from 'react-router-dom';
function CountryCard({flag,name,population,region,capital, setName}) {
    function findInfo({name}){
        setName(name);
    }
    return(
        <Link to="/Details"  >
        <div className="card" onClick={(e)=>findInfo({name})}>
            <div className = "countryFlag"><img src={flag} alt ={`${name} flag`} /></div>
            <div className="info-details">
            <h3>{name}</h3>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
        </Link>
    );
    
}

export default CountryCard;
