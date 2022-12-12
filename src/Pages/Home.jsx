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
        setResponse([...filteredData]);
}
},[data,search])
    return(
    <>
        <FilterSection search ={search} setSearchInput={setSearchInput}/>
        {loading && <h1>Loading...</h1>}
            {error && <h1>No result...</h1> }
        <CountryContainer setName = {setName} data ={response} />
        </>);
}

export default Home ;