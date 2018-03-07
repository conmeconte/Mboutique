import axios from 'axios'; 
import types from './types'; 


export function sendMail(data){
    console.log(data);
    return{ 
        type: types.SEND_MAIL,
        payload: data
    }
    
}