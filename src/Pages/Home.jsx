import React, { useState, useEffect } from 'react';
import FilterSection from '../Components/FilterSection';
import useAxios from '../Hooks/useAxios';
import CountryContainer from '../Components/CountryContainer';
function Home ({ setName}) {
const {data, loading, error} = useAxios('https://restcountries.com/v2/all?fields=name,flag,capital,region,currency,population');
const [response, setResponse] = useState([]);
const [search, setSearchInput] = useState('');
const [option,setSearchOption] =useState('');
useEffect(()=>{
   if(data !== null)
   {   
    console.log(option);
        let filteredData = data.filter( item => search ? item.name.toLowerCase().includes(search.toLowerCase()) :  item.region.includes(option));
        console.log(filteredData);
        setResponse([...filteredData]);
}
},[data,search,option])
    return(
    <>
        <FilterSection search ={search}  option ={option} setSearchOption={setSearchOption} setSearchInput={setSearchInput}/>
        {loading && <h1>Loading...</h1>}
            {error && <h1>No result...</h1> }
        <CountryContainer setName = {setName} data ={response} />
        </>);
}

export default Home ;