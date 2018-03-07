import React from 'react';
import Header from './header';
import Footer from './footer';
import gift_background from '../assets/images/gifts-parties-image.png';
import gift_background2 from '../assets/images/gifts-parties-background.png';
import './giftsParties.css'; 


export default props=>{

    return(
        <div>
            <Header background_url={gift_background}/>
            <div className="gifts">
                <h5>Let's eat macarons!</h5>
                <p>We make it easy to share la passion du macaron with your friends, family and colleagues. Choose
from our array of premium gift options, or we can create a custom solution.
Contact us when you need help planning your celebration! <a href='mailto:orders@mboutique.com'>orders@mboutique.com</a></p>
                <div className="row gifts">
                    <div className="gift_text col m9 s12">
                        <h5>Gift boxes</h5>
                        <p>Our signature gift boxes make macarons the perfect gift for any occasion.</p>
                        <br/>
                        <ul>
                            <li>gift box of 6 macarons in raspberrywhite - $ 10</li>
                            <li>gift box of 12 macarons in white, pistachio, or violet – $20</li>
                            <li>gift box of 24 macarons in violet – $40</li>
                            <li>gift box of 36 macarons in silver – $60</li>
                            <li>gift box à la ronde of 60 macarons in violet or silver – $120</li>
                        </ul>
                        <h5>Party tower</h5>
                        <p>Our 5-tiered party tower becomes the centerpiece of any special event or private celebration,
    elegantly presenting your unique selection of sixty macarons.</p>
                        <br/>
                        <ul>
                            <li>tower of 60 macarons – $120</li>
                        </ul>
                    </div>
                    <div className="gift_img col m3 s12">
                        <img src={gift_background2} alt=""/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}