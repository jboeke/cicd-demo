#! /usr/bin/env node

const fs = require("fs");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

pathToAttachment = `${__dirname}/image.jpg`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");

const msg = {
    to: 'me@here.com',
    from: 'me@here.com',
    subject: 'Biscuit Says...',
    text: '...please take me for a walk!',
    html: '<p>... please take me for a walk!</p>',
    attachments: [
        {
            content: attachment,
            filename: 'image.jpg',
            type: 'image/jpeg',
            disposition: 'attachment',
        },
    ],
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));