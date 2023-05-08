import React from 'react'
import {Routes, Route , BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import NotFound from './Pages/NotFound'
function App() {
  return(  
    <Router>
     <Navbar />
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/country/:countryname" element={<Details/>}/>
      <Route path ="*" element={<NotFound/>} />
    </Routes>
    </Router>
   
  );

}

export default App;
