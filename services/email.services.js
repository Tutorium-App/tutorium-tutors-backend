const axios = require('axios');
require('dotenv').config();

const serviceId = process.env.serviceId;
const templateId = process.env.templateId;
const userId = process.env.userId;

class EmailServices {
    static async sendEmail(email, fullName, mySubject, myMessage) {
        const url = 'https://api.emailjs.com/api/v1.0/email/send';

        try {
            const response = await axios.post(url, {
                service_id: serviceId,
                template_id: templateId,
                user_id: userId,
                template_params: {
                    to_email: email,
                    from_name: "Tutorium",
                    to_name: fullName,
                    reply_to: 'buabassahlawson@gmail.com',
                    subject: mySubject,
                    message: myMessage,
                },
            }, {
                headers: {
                    'origin': 'https://maifriend-server.onrender.com/',
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = EmailServices;
