module.exports = {
  send: send
};

var nodemailer = require('nodemailer');
var fs = require('fs');

var mailConfig = JSON.parse(fs.readFileSync('./mail_conf.json', 'utf8'));

// create reusable transporter object using the default SMTP transport
var smtpConfig = mailConfig.smtpConfig;
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols
/*
var mailOptions = {
    from: '"sender" <peppert@futurewoods.co.jp>',
    to: 'peppert@futurewoods.co.jp',
    subject: 'SUBJECT',
    text: '🍣🍣🍣',
};
send(mailOptions);
*/

// send mail with defined transport object
function send(mailOptions, callback) {
  transporter.sendMail(mailOptions, callback);
    /*
    function callback (error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    */
}
