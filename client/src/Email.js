const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '4e6ebad50c81da',
       pass: '1204f9571342dc'
     }
});

const email =
const message = {
    from: 'isamitre@gmail.com', // Sender address
    to: '40ec1310ca-3ab0e0@inbox.mailtrap.io',         // List of recipients
    subject: 'Volunteer Form', // Subject line
    text: 'info here?' // Plain text body
};

exports.sendMail = transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
