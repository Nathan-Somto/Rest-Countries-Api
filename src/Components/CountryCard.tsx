import React from 'react';
import {Link} from 'react-router-dom';
function CountryCard({flag,name,population,region,capital,url, setUrl}) {
    function FindInfo(e){
        // add the name of the country to the url
        return;
    }
    return(
        <Link to="Details" onClick={FindInfo}>
        <div className="card">
            <img src={flag} alt ={`${name} flag`} />
            <h3>{name}</h3>
            <div className="info-details">
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
        </Link>
    );
    
}

export default CountryCard;