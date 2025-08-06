import React from 'react';
import Login from "./Login.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './Singup.jsx';
import HomePage from './HomePage.jsx';

function App(){

    console.log("Rentered");
    return(
        
           <BrowserRouter>
              <Routes>
                
                <Route path = "/" element ={<Login/>}/>
                <Route path = "/Signup" element={<Signup/>} />
                <Route path = "/HomePage" element={<HomePage/>} />
                </Routes>
           
           </BrowserRouter>
            
        
    )
    
}

export default App;
