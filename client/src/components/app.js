import React from 'react';
import Home from './home';
import {Route, Link} from 'react-router-dom'; 
import macaronImage from '../assets/images/macarons-image.png';
import Contact from './contact'; 
import Our_macarons from './ourmacaron'; 
import Gifts_parties from './giftsParties'; 
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


const App = () => {
    const checkSideMenu= (event)=>{
        if(event.target.classList[0] != "navMenu" && event.target.classList[0] != "material-icons"){
            document.getElementById('mobile-demo').classList.remove("sideMenuToggle")
        }

        if(document.getElementById('emailModal')){
            document.getElementById('emailModal').classList.remove("slideModalToggle")
        }
    }
    

    return (
    <div className='container' onClick={event=>checkSideMenu(event)}>
        <Route exact path='/' component={Home} />
        <Route path='/our_macarons' component={Our_macarons}/>
        <Route path='/gifts_parties' component={Gifts_parties}/> 
        <Route path='/contact_us' component={Contact}/>
    </div>
    )
};

export default App;
