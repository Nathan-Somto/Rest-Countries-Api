import React, { useState } from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from './Components/Navbar';
function App() {
  const[Theme, setTheme] = useState('Dark');
  const[url, setUrl] = useState('');
  return(  
    <div>
      <Navbar Theme={Theme} setTheme={setTheme}/>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home Theme={Theme} url ={url} setUrl={setUrl} ></Home>}/>
      <Route path ="Details" element={<Details url ={ url} />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );

}

export default App;