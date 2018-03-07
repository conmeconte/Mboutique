import React from 'react'; 
import './footer.css'; 

const Footer = (props)=>(
    <footer className='page-footer'>
        <div className="row valign-wrapper">
            <div className='mail col s12 m4 center-align'>
                <a href="mailto:order@mboutique.com">order@mboutique.com</a>
            </div>
            <div className='phone col s12 m4 center-align'>
                <p>949.800-3111</p>
            </div>
            <div className='social_media col s12 m4 center-align'>
                <p>Follow us</p>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className='copyRight col s12 center-align'>
                <p>Copyright &copy; 2017 MBoutique. All rights reserved</p>
        </div>
        
    </footer>
);

export default Footer; 