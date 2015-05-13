var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//var client = require('twilio')('ACd100af41a33027d7783bf1dc4b9c8171','ce3943ac1ad460f982e15ffb16fb0332');


var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var app = express();      
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));
     
       app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('index');
});


                    //   var nodemailer = require('nodemailer');
                    //   var sgTransport = require('nodemailer-sendgrid-transport');

                    //   app.get('/sendmail',function(req,res){
                    //     var options = {
                    //     auth: {
                    //       api_user: 'thulasig7',
                    //       api_key: 'thulasi246'
                    //     }
                    //   }
                       
                    //   var client = nodemailer.createTransport(sgTransport(options));
                       
                    //   var email = {
                    //     from: 'thulasig7@gmail.com',
                    //     to: 'thulasiramg7@gmail.com',
                    //     subject: 'Hello',
                    //     text: 'Hello world',
                    //     html: '<b>Hello world</b>'
                    //   };
                       
                    //   client.sendMail(email, function(err, info){
                    //       if (err ){
                    //         throw err;
                    //       }
                    //       else {
                    //         console.log('Message sent: ' + info.response);
                    //       }
                    //   });
                    // });
                       
                      


 var email = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    user: "gthulasiram8@gmail.com",
    pass: "8985325646"
}
});


app.post('/sendemail',function(req,res){

//var sendgrid  = require('sendgrid')("thulasig7","thulasi246");
                console.log(req.body.Email);
                var username = req.body.Email;
                var name = req.body.Name;
                var message = req.body.Message;
                var mailOptions = {
                        from: 'THULASIRAM ✔ <gthulasiram8@gmail.com>', // sender address
                        to: username, // list of receivers
                        subject: name, // Subject line
                        text: message, // plaintext body
                        html: '<b>Hello world ✔</b>' // html body
                    };
                
                
      email.sendMail(mailOptions,function(error, info){
                        if(error){
                            console.log(error);
                        }else{
                          res.send('Mail sended');
                            console.log('Message sent: ' + info.response);
                        }
                    });

          // sendgrid.send({
          //   to:       username,
          //   from:     'thulasig7@gmail.com',
          //   subject:  name,
          //   text:     message
          // }, function(err, json) {
          //   if (err) { return err }
          //   res.send('mail has sended');
          // });
});

//-------------------------------------
// 192.168.1.10
// test
// password123



// ftp ...21
// sftp ....22....port


//----------------------------------





                                  // send grid
                                            // app.get('/',function(req,res){
                                            //   //res.render('index');
                                            //   var sendgrid  = require('sendgrid')("thulasig7","thulasi246");
                                            // sendgrid.send({
                                            //   to:       'thulasig7@gmail.com',
                                            //   from:     'gthulasiram8@gmail.com',
                                            //   subject:  'Hello World',
                                            //   text:     'My first email through SendGrid.'
                                            // }, function(err, json) {
                                            //   if (err) { return err }
                                            //   res.send('woooooohoooo');
                                            // });
                                            // });



// app.post('/twiliotest',function(req,res){
//   //console.log(req.body);
//   var sender = '+18623978703';
//   var number = '+91'+req.body.Number;
//   var message = req.body.Message;

//   console.log(number);
//                     client.sendMessage({
//                       to : number,
//                       from: sender,
//                       body:message
//                     },function(err,data){
//                           if (err) {console.log('your number is wrong (or) not veryfyed')}
//                           else{
//                             console.log(data);
//                           }
//                         });
// });

module.exports = app;
