import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DetailsContainer from '../Components/DetailsContainer';
import useAxios from '../Hooks/useAxios';
import nameAndCodes  from '../Components/countryNamesandCodes';
import backicon from '../back.svg';
function Details({url,setName,name}) {
    if(!name){
        setName(JSON.parse(window.localStorage.getItem('URL_State')));
    }
   const {data, loading, error} = useAxios(url);
   const [response, setResponse] = useState([]);
   const [countryNames, setCountryNames] = useState([]);
   
    useEffect(() =>{
       if(name){
            window.localStorage.setItem('URL_State',JSON.stringify(name));
        }
      
    if(data.length !== 0 ){
    setResponse([...data]);
    let countryNames =[];
    
    // checks if borders is undefined
    if(data[0].borders)
    {
   data[0].borders.forEach(border => {
    let obj = nameAndCodes.filter(item => item.code === border);
    countryNames.push(obj[0].name);       
    });
    setCountryNames([...countryNames]);
}
   
}
return () =>{
    console.log('un mount');
}

},[data,url,name]);

        return(
            <div className='detailsPage'>
            <Link className='backIcon'  to={'/'}>
               <img src={backicon} alt="back icon" /> Back</Link>

            {loading && <h1>loading...</h1>}
            {response && response.map( item => <DetailsContainer
            key ={`${item.name}-${item.population}`}
             name ={item.name}
        flag = {item.flag}
        nativeName = {item.nativeName}
        topLevelDomain ={item.topLevelDomain}
        population = {item.population}
        currencies ={item.currencies}
        region ={item.region}
        languagues ={item.languages}
        subregion ={item.subregion}
        capital ={item.capital}
        borders ={countryNames}  
        setName = {setName}
        />)}
        </div>
    )
    
}

export default Details;