import React from 'react';
import Home from './home';
import {Route, Link} from 'react-router-dom'; 
import macaronImage from '../assets/images/macarons-image.png';
import Contact from './contact'; 
import Our_macarons from './ourmacaron'; 
import Gifts_parties from './giftsParties'; 
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


// function checkSideMenu(){
//     let sideMenu= document.getElementById('mobile-demo')
//     if(sideMenu.classList.contains("sideMenuToggle")){
//         sideMenu.classList.remove("sideMenuToggle");
//     }
// }

const App = () => {
    
    
    return (
    // <div onClick={checkSideMenu} className='container'>
    <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/our_macarons' component={Our_macarons}/>
        <Route path='/gifts_parties' component={Gifts_parties}/> 
        <Route path='/contact_us' component={Contact}/>
    </div>
    )
};

export default App;
