import React from 'react'; 
import './footer.css'; 
import facebookImg from '../assets/images/facebook.png';
import phoneImg from '../assets/images/phone.png'; 
import mailImg from '../assets/images/mail.png'; 

const Footer = (props)=>(
    <footer className='row  valing-wrapper page-footer'>
        <div className="row">
            <div className='mail col s12 m4 center-align'>
            <img src={mailImg}/>
            <p>order@mboutique.com</p>
            </div>
            <div className='phone col s12 m4 center-align'>
                <p>949.800-3111</p>
            </div>
            <div className='social_media col s12 m4 center-align'>
                <p>Follow us</p>
                <a href="https://www.facebook.com" target="__blank"><img src={facebookImg}/></a>
                <a><img src={phoneImg}/></a>
            </div>
        </div>
        <div className='copyRight row center-align'>
                <p>Copyright &copy; 2017 MBoutique. All rights reserved</p>
        </div>
        
    </footer>
);

export default Footer; 