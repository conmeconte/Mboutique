import React from 'react';

export default props=>{
    const todayMenu= props.item.map((item, index)=>{
        return(
        <div key={index} className= {item.day.toLowerCase()}>
            <p>{item.day}</p>
            <p>{item.hour}</p>
            <p>{item.menu1}</p>
            <p>{item.menu2}</p>
            <div className="under_color"></div>
            <img src={item.img1}/>
            <img src={item.img2}/>
        </div>    
        );
    });
    return(
        <div className="row schedule">
        {/* <div className="col s1 hide-on-med-and-up"></div> */}
            {todayMenu}
        {/* <div className="col s1 hide-on-med-and-up"></div> */}
        </div>
    )
}