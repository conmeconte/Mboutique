import React from 'react';
import Header from './header';
import Footer from './footer';
import './home.css'; 
import Schedule from './menuSchedule';
import macaronImage from '../assets/images/macarons-image.png';
import chocolate from '../assets/images/chocolate.png';
import coconut from '../assets/images/coconut.png';
import violet from '../assets/images/violet-cassis.png';
import green from '../assets/images/green-tea.png';
import passion from '../assets/images/passion-fruit.png';
import vanilla from '../assets/images/vanilla.png';
import coffee from '../assets/images/coffee.png';
import pistachio from '../assets/images/pistachio.png';
import raspbery from '../assets/images/raspbery.png';
import lemon from '../assets/images/lemon.png';
import rose from '../assets/images/rose.png';
import tiffany from '../assets/images/tiffany-blue.png';
import caramel from '../assets/images/caramel.png';
import almond from '../assets/images/almond.png';
import heroImage from '../assets/images/welcome-image.png';



const Home = props=>{
    const macaronSchedule=[
        {
            day: 'Monday',
            hour: "15:00 – 16:00",
            menu1: 'chocolate',
            menu2: 'coconut',
            img1: chocolate,
            img2: coconut
        },
        {
            day: 'Tuesday',
            hour: "14:00 – 15:00",
            menu1: 'violet cassis',
            menu2: 'green tea',
            img1: violet,
            img2: green
        },
        {
            day: 'Wednesday',
            hour: "09:00 – 10:00",
            menu1: 'passion fruit',
            menu2: 'vanilla',
            img1: passion,
            img2: vanilla
        },
        {
            day: 'Thursday',
            hour: "18:00 – 19:00",
            menu1: 'coffee',
            menu2: 'pistachio',
            img1: coffee,
            img2: pistachio
        },
        {
            day: 'Friday',
            hour: "11:00 – 12:00",
            menu1: 'raspbery',
            menu2: 'lemon',
            img1: raspbery,
            img2: lemon
        },
        {
            day: 'Saturday',
            hour: "13:00 – 14:00",
            menu1: 'rose',
            menu2: 'tiffany blue',
            img1: rose,
            img2: tiffany
        },
        {
            day: 'Sunday',
            hour: "10:00 – 11:00",
            menu1: 'caramel',
            menu2: 'almond',
            img1: caramel,
            img2: almond
        },
    ];


    return(
        <div>
            <Header background_url={heroImage} />
            <section className='home'>
                <div className='row first  valign-wrapper'>
                    <div className='col homeSideImg offset-s4 s4 m3'>
                        <img src={macaronImage}/>
                    </div>    
                    <div className='col s12 m8'>
                        <h5>WELCOME TO MBOUTIQUE!</h5>
                        <p>We're a home-based baking business that specializes in the making of French macarons, a glutenfree
                            pastry item made from ground almonds. Our business began at the West Reading Farmers
                            Market in 2011. Last year (2013) marked our third and final season of participation at the market.
                            MBoutique was established to pay homage to the delicate French confectionery, the macaron. Our
                            shop has been recognized as the connoisseurs of this delicious French pastry because of the
                            wonderful variety of flavors from our great master chefs.</p>
                        <div className="divider"></div>    
                        <h5>WE LOVE MACARONS!</h5>
                        <p>Renowned macarons, French delights of the moment can be met in a variety of flavors and colors
                            and are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanket
                            jam, chocolate butter cream is spread inviting .</p>
                        <p>Macarons combines perfectly with champagne or white wine, tea or hot chocolate, fresh juices and
                            natural fruit flavored coffee and guarantee that these little delights soon become friend that you can
                            not break.</p>
                        <div className="divider"></div>
                        <h5>Find that flavor you like. Try a sample every day!</h5>
                    </div>
                </div>

                <Schedule item={macaronSchedule}/>

            </section>

            <Footer />
        </div>
    );
    

    
};


export default Home; 