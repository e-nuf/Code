var word=null;
var du='';
var Jimp = require("jimp");
var QrCode = require('qrcode-reader');
var fs = require('fs');
var buffer = fs.readFileSync('qrimg.png');
var nodemailer = require("nodemailer");


var smtpTransport1 = require("nodemailer-smtp-transport");






Jimp.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
        
    }
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
                   }
       console.log(value.result);
	word = value.result;
	 
        //console.log(value);
}    
     qr.decode(image.bitmap);


var smtpTransport = nodemailer.createTransport(smtpTransport1({


    service: 'Gmail',
    
    auth: { user: 'siddharthshiv2798@gmail.com',

            pass: '' 

        }, 
  
}));




	var mailOptions = {

 
	 from: "siddharthshiv2798@gmail.com",
  
	 to: 'medfetch5@gmail.com',
 
	 subject: "Welcome to Medfetch",
	generateTextFromHTML: true,
	html: "<strong>Hello <br> "+word+"<br>Medfetch</strong>"
	};
	

	





smtpTransport.sendMail(mailOptions, function(error, response) {

	
  if (error) {
 
	   console.log(error);
  }
	 else {
    console.log(response);
 
 }
});
});