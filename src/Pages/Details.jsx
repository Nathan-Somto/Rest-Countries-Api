import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DetailsContainer from '../Components/DetailsContainer';
import useAxios from '../Hooks/useAxios';
function Details({url,setName,name}) {
   const {data, loading, error} =useAxios(url);
   console.log(url);
   const [response, setResponse] = useState([]);
    useEffect(() =>{
    if(data.length !== 0 ){
    console.log(data);
    setResponse([...data]);
    return ()=>{
        console.log('un mount');
    }
}

},[name,data]);
    const[historyStack,setHistoryStack] = useState([]);
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
            <div>
            <Link onClick ={handleStack} to={historyStack.length === 0 ?'/':'Details'}>Back Icon</Link>
    
            <h1>Details Page</h1>
            <DetailsContainer detailsData={response[0]} loading={loading} error={error}/>
        </div>
    )
    
}

export default Details;