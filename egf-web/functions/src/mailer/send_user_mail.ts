
import {db, ff} from '../init';
import mail from '../mailer/mail';
import {getFreshDocData} from "../utils/db_utils";

export const onCreateUser =
    ff
    .document('users/{userId}')
    .onCreate(async (snapshot, context) => {

        const today = new Date();

        const date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();

        const userRef = snapshot.ref;

        if (userRef === null) {
            return;
        }

        await db.runTransaction(async (transaction) => {

            const freshUser = await getFreshDocData(transaction,userRef);


            if (freshUser === undefined) {
                console.log('freshUser undefined');
                return;
            }

            console.log('freshUser ===>>>', freshUser);

            const email= freshUser.email;

            const title = 'TEST DE ENVOIE';
            const subject = 'TESTE EGF DU ' + date;

            const message = `<body style="margin: 0; padding: 0;"> 
            <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                <tr>
                    <td style="padding: 10px 0 30px 0;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                            <tr>
                                <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                
                                                <b>${title}</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                ${subject}
                                            </td>
                                        </tr>
                                        <tr>
            
                                      </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>                
                        </table>
                    </td>
                </tr>
            </table>
        </body>`;


        mail.sendMail(email, subject, title, message);

         console.log('sendMail done');
        });


    });





