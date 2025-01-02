import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import ChandlierRoute from './components/ChandlierRoute'

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
   
     <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/chandlier" element={<ChandlierRoute />} />

       
        
      </Routes>
      </BrowserRouter> 

  

  );
}

export default App;
