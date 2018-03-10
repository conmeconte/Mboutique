import React, { Component } from 'react';
import contactImage from '../assets/images/contact-image.png';
import Header from './header';
import Footer from './footer';
import EmailModal from './emailModal'; 
import macaron from '../assets/images/macarons-image.png'
import './contact.css';
import { connect } from 'react-redux'; 
import {Field, reduxForm } from 'redux-form'; 
import { sendMail } from '../actions';
import axios from "axios"; 

class Contact extends Component{

    renderField(field){
        const {meta: {touched, error}} = field; 
        const className= `form-group ${touched && error ? 'has-danger': ''}`
        return(
            <div className={className}>
                <label>{field.label + ' '} <span className="pink-text text-lighten-1">{touched ? error: ''}</span></label>
                <input className= "form-control" type = {field.type ? field.type : "text"} {...field.input} />
                {/* <div className="pink-text text-lighten-1">{touched ? error: ''}</div> */}
            </div>
        )
    }

    onSubmit(values, dispatch, props){
        this.props.sendMail(values, ()=>{
            props.reset(); 
        })
        axios.post('/api/contact', values).then((resp)=>{
            console.log('axios call resp ', resp);
            this.openModal();
            props.reset();   
        }).catch((err)=>{
            if(err){
                console.log('mail was not sent out'); 
            }
        })
        
    }

    openModal(){
        let modal = document.getElementById('emailModal');
        // modal.style.display = "block";
        modal.classList.add("slideModalToggle");


    }
    

    render(){

        return(
            <div>
                <Header background_url={contactImage} />
                <div className='contact_body row'>
                    <div className="store_info col s12  m5 " >
                        <h5>Visit us!</h5>
                        <p>Monday – Friday | 10am – 9pm</p>
                        <p>Saturday | 10am – 8pm</p>
                        <p>Sunday | 11am – 7pm</p>
                        <p>Closed Thanksgiving Day, Christmas Day and Easter Day</p>
                        <div className="divider"></div>
                        <p>1625 Post St</p>
                        <p>San Francisco, CA 94115</p>
                        <div className="divider"></div>
                        <p>949.800-3111</p>
                        <a href="mailto:order@mboutique.com">order@mboutique.com</a>
                        <div className="divider"></div>
                        <p>Send your questions, comments and flavor suggestions or place an order!</p>
                    </div>
                    <form name='contactUs' action="" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className= ' contact-form col m5 s12'>
                        <h5>Contact Form</h5>
                        <Field name='name' component={this.renderField} label="Name"/>
                        <Field name='email' component={this.renderField} label="Email"/>
                        <Field name='phone' type="tel" component={this.renderField} label="Phone"/>
                        <Field name='subject' component={this.renderField} label="Subject"/>
                        <Field name='message' component={this.renderField} label="Message"/>
                        <div className="input-field col s12 m12 ">
                            <button className='waves-effect waves-light btn right'>Send</button>
                        </div>
                    </form>
                    <div className="col m2 s12 contactSideImage">
                        <img src={macaron} alt="" className="contact_macaron"/> 
                    </div>
                </div>
                <EmailModal/>
                <Footer />
            </div>
        )

    }
}

function validate(values){
    const errors={};

    if(!values.name){
        errors.name="Enter a Name";
    }
    if(!values.email || !values.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        errors.email="Enter a valid email";
    }
    if(!values.message){
        errors.message= "Enter a message"; 
    }

    return errors; 
}

Contact = reduxForm({
    validate, 
    form: 'contact-form'
})(connect(null, {sendMail})(Contact));

export default Contact; 