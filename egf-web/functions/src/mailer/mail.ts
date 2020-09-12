
import * as nodemailer from 'nodemailer';
import {Config} from "./config";

const config = new Config();

export class Mail {

    // constructor() { }

    sendMail(
        to: string,
        subject: string,
        title: string,
        message: string,
        from = config.user
    ) {

        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: title,
            html: message
        };

        const transporter = nodemailer.createTransport({
            service : config.service,
            secure: false,
            auth: {
                user: config.user,
                pass: config.password
            },
            tls: { rejectUnauthorized: false }
        });


        console.log('mailOptions', mailOptions);

        transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                console.log('error',error);
                console.log("Preview URL : %s", nodemailer.getTestMessageUrl(error));
            }else{
                console.log('success',info);
                console.log("Message sent: %s", info.messageId)
            }
        });

        console.log('Message sent');
        transporter.close();
    }


}

export default new Mail;
