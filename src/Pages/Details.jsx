import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DetailsContainer from '../Components/DetailsContainer';
import useAxios from '../Hooks/useAxios';
function Details({url,setName,name}) {
    if(!name){
        setName(JSON.parse(window.localStorage.getItem('URL_State')));
    }
    const [code,setCode] =useState('');
    const borderUrl = `https://restcountries.com/v2/alpha/${code}`;
   const {data, loading, error} = useAxios(code ? borderUrl : url);
   const[historyStack,setHistoryStack] = useState([]);
   const [response, setResponse] = useState([]);
   console.log(code);
    useEffect(() =>{
       if(name){
            window.localStorage.setItem('URL_State',JSON.stringify(name));
        }
      
    if(data.length !== 0 ){
    setResponse([...data]);
   
}
return () =>{
    console.log('un mopunt');
}

},[data,url,name,code]);
console.log(loading);
 
    function handleBorder()
    {
        return;
        //setName() Set the name hook to the name of the border clicked
        // add the name of the border to the top of the history stack

    }
    function handleStack()
    {
        return;
        setName(historyStack[historyStack.length-1]); // set the name to the last element in the history stack
        setHistoryStack([...historyStack.filter(item => item !== historyStack.length - 1)]); // remove the last coutnry in the history
    }
        return(
            <div className='detailsPage'>
            <Link className='backIcon' onClick ={handleStack} to={historyStack.length === 0 ?'/':'Details'}>Back Icon</Link>

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
        borders ={item.borders}  
        setCode = {setCode}
        />)}
        </div>
    )
    
}

export default Details;