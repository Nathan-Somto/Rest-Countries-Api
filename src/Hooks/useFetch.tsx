import axios from "axios";
import {useEffect, useState} from 'react';
function useFetch({url}) {
const[data, setData] = useState(['']);
const [loading,setLoading] = useState(true);
const [error, setError] = useState(false);
    useEffect(()=>
    {
         async function getData (){
            try{
            const response = await axios.get(url);
            setData([...response]);
        }
        catch(error){
            console.log(error);
            setError(true);
        }
        finally{
            setLoading(false);
        }
    }
        
    },
    [url]);
    return({data, loading, error});
    
}

export default useFetch;