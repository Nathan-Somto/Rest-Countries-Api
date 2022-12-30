import React, { useState } from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from './Components/Navbar';
function App() {
  const[Theme, setTheme] = useState('Dark');
  const[name, setName]= useState('');
  const url = `https://restcountries.com/v2/name/${name}?fullText=true`;
  return(  
    <>
      <Navbar Theme={Theme} setTheme={setTheme}/>
    <BrowserRouter>
    <Routes>
      <Route path ="/Rest-Countries-Api" element={<Home Theme={Theme}  setName={setName} ></Home>}/>
      <Route path ="/Rest-Countries-Api/Details" element={<Details name= {name} url ={ url} setName={setName} />}/>
    </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;