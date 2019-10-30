const Nodemailer = require('nodemailer');
require('dotenv/config');

class Email {
    constructor() {
        this.nodemailer = Nodemailer;
        this.transporter;
        this.mailOptions;
        this.configStructure();
    }

    configStructure() {
        this.transporter = this.nodemailer.createTransport({
            service: `${process.env.MAIL_TYPE}`,
            auth: {
                user: `${process.env.MAIL_USER}`,
                pass: `${process.env.MAIL_PASS}`
            }
        });

        this.mailOptions = {
            from: '',
            to: '',
            subject: '',
            html: '',
            attachments: [{
                filename: '',
                path: ''
            }]
        }
    }

    get transporter() {
        return this.transporter;
    }
    get mailOptions() {
        return this.mailOptions
    }
}

module.exports = new Email();