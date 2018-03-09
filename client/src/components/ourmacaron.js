import React from 'react';
import Header from './header';
import Footer from './footer';
import './ourMacaron.css'; 
import ourMacImage from '../assets/images/our-macarons-background.png'



export default props=>{
    const macaron_names=['caribbean chocolate', 'coconut', 'colombian coffee', 'green tea', 'lemon', 'madagascar vanilla','passion fruit', 'rose', 'raspbery', 'tiffany blue', 'sicilian pistachio', 'sweet wedding almond', 'violet cassis', 'salted caramel'];
    const nameLoop= macaron_names.map((item, index)=>{
        return(
            <li key={index}>{item}</li>
        );
    })
    return(
        <div>
            <Header />
            <div className="macaron_body">
                <div className="macaron_top center-align">
                    <h5>Our macarons are freshly made by hand</h5>
                    <p>The vivid hues of our unique macarons reflect the natural flavors and essences that infuse the
ganache filling of these delicious almond cookies – each has its own personality, and all of them are
made to savour for their delicacy and unique character.</p>
                </div>
                <div className='row'>
                    <div className="classics col m2 s12">
                        <h5>Classics</h5>
                        <ul>
                            {nameLoop}
                        </ul>
                    </div>
                    <div className="our_macaron_bkImage col m10 s12">
                            <img src={ourMacImage} alt=""/>
                    </div>
                </div>
                <p>After purchase we recommend keeping macarons in the refrigerator; let them come to room
    temperature before serving - about 10 minutes. For best degustation, our macarons should be
    consumed within 3 days.</p>

            </div>
            <Footer />
        </div>
    );
};