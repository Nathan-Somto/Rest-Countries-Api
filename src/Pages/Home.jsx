import React, { useState, useEffect } from 'react';
import FilterSection from '../Components/FilterSection';
import useAxios from '../Hooks/useAxios';
import CountryContainer from '../Components/CountryContainer';
function Home ({ setName}) {
const {data, loading, error} = useAxios('https://restcountries.com/v2/all?fields=name,flag,capital,region,currency,population');
const [response, setResponse] = useState([]);
const [search, setSearchInput] = useState('');
useEffect(()=>{
   if(data !== null)
   {   
        let filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) ||  item.region.includes(search));
        console.log(filteredData); 
        setResponse([...filteredData]);
}
},[data,search])
    return(
    <>
        <FilterSection search ={search} setSearchInput={setSearchInput}/>
        <CountryContainer setName = {setName} data ={response} loading ={loading} error={error}/>
        </>);
}

export default Home ;