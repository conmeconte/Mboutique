import React, { Component } from 'react'; 
import './header.css';
import heroImage from '../assets/images/welcome-image.png';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props);

        this.state ={
            hamburger: false
        }

    }
    showHamburger(){
        document.getElementById('mobile-demo').classList.add("sideMenuToggle"); 
        setInterval(()=>{this.setState({
            hamburger: true
        })}, 100); 
    }
    
    closeHamburger(){
        if(this.state.hamburger){
            document.getElementById('mobile-demo').classList.remove("sideMenuToggle")
            this.setState({
                hamburger: false
            })
        }
    }


    render(){
        return(
            <header onClick={this.closeHamburger}>
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
                        <ul id="mobile-demo" className='side-nav collection'>
                            <li className="collection-header"><h4>Pages</h4></li>
                            <li className="collection-item yellow lighten-3"><Link to='/'>WELCOME</Link></li>
                            <li className="collection-item yellow lighten-3"><Link to='/our_macarons'>OUR MACARONS</Link></li>
                            <li className="collection-item yellow lighten-3"><Link to='/gifts_parties'>GIFTS &amp; PARTIES</Link></li>
                            <li className="collection-item yellow lighten-3"><Link to='/contact_us'>CONTACT</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className='hero-box'>
                    <img src={`${this.props.background_url || heroImage}`}/>
                </div>
            </header>
        );
    }
    

}


export default Header; 