import React from 'react'; 
import './header.css';
import heroImage from '../assets/images/welcome-image.png';
import {Link} from 'react-router-dom';


const Header = (props)=>{
    this.showHamburger= ()=>{
        document.getElementById('mobile-demo').classList.add("sideMenuToggle"); 
    }
    
    this.closeHamburger= ()=>{
        if(document.getElementById('mobile-demo').classList.contains("sideMenuToggle")){
            document.getElementById('mobile-demo').classList.remove("sideMenuToggle")
        }
    }



    return(
        <header>
        <nav>
            <div className='header nav-wrapper yellow lighten-3'>
                <a href="http://mboutique.conmeconte.com"className='logo brand-logo'></a>
                <a onClick={this.showHamburger} data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

                <ul id="nav-mobile" className='right hide-on-med-and-down'>
                    <li><Link to='/'>WELCOME</Link></li>
                    <li><Link to='/our_macarons'>OUR MACARONS</Link></li>
                    <li><Link to='/gifts_parties'>GIFTS &amp; PARTIES</Link></li>
                    <li><Link to='/contact_us'>CONTACT</Link></li>
                </ul>
                <ul onClick={this.closeHamburger} id="mobile-demo" className='side-nav pink lighten-3 collection'>
                    <li className="collection-header"><h4>Pages</h4></li>
                    <li className="collection-item lime accent-1"><Link to='/'>WELCOME</Link></li>
                    <li className="collection-item lime accent-1"><Link to='/our_macarons'>OUR MACARONS</Link></li>
                    <li className="collection-item lime accent-1"><Link to='/gifts_parties'>GIFTS &amp; PARTIES</Link></li>
                    <li className="collection-item lime accent-1"><Link to='/contact_us'>CONTACT</Link></li>
                </ul>
            </div>
        </nav>
        <div className='hero-box'>
            <img src={`${props.background_url || heroImage}`}/>
        </div>
    </header>
    );

};


export default Header; 