const express = require('express'); 
const path          = require('path');
const nodemailer = require('nodemailer');
const { USERNAME, PASSWORD, RECIPIENT } = require('./config'); 

app = express(); 

const PORT = process.env.PORT || 7000; 

// Consume middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USERNAME,     
      pass: PASSWORD  
    }                             
  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist'))
})
  



app.post('/api/contact', (req, res)=>{
    console.log('info arrive ', req.body); 
    const mailOptions = {
        from: req.body.email,  // Sender of the email 
        to: RECIPIENT,
        phone: req.body.phone,  // Recipient of the email
        subject: req.body.subject,              // Subject of the email
        text: req.body.message,               // Message of the email
        // html: '<h1>SUP DOOOD</h1>'     // Can be used in place of the text
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent successfully' + info.response);
        }
      });
      res.end();

})


app.listen(PORT, ()=>{
    console.log("Server is Running at localhost: " + PORT); 
})