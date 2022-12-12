import axios from "axios";
import {useEffect, useState} from 'react';
function useAxios(url) {
const [data, setData] = useState([]);
const [loading,setLoading] = useState(true);
const [error, setError] = useState(false);
axios.defaults.baseURL ='https://restcountries.com/v2/all';
    useEffect(()=>
    {
        let mount = true;   
         const getData = async () => {
            
            try{
            const response = await axios.get(url);
            if(mount){

            setData(response.data);
        }
        }
        catch(error){
            setError(true);
        }
        finally{
            setLoading(false);
        }
    }
        getData();
        return ()=> mount = false;
    },
    [url]);
    return {data, loading, error};
    
}

export default useAxios;