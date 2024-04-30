const axios = require('axios');
require('dotenv').config();

const serviceId = process.env.serviceId;
const templateId = process.env.templateId;
const userId = process.env.userId;

class EmailServices {
    static async sendTutorRegistrationSuccessEmail(email, fullName) {
        const url = 'https://api.emailjs.com/api/v1.0/email/send';

        const myMessage = `Dear ${fullNameame},\n\n
            Congratulations on joining Tutorium! We're thrilled to have you aboard our community of passionate and dedicated tutors. At Tutorium, we believe in the power of education and the difference it can make in a student's life. As a tutor on our platform, you'll have the opportunity to share your knowledge, connect with fellow students, and earn money while you do it.\n\n
            We're committed to providing you with all the support you need to succeed. We look forward to seeing the impact you'll make. If you have any questions or need assistance, feel free to reach out to our support team.\n\n
            Welcome to Tutorium, where learning meets passion and opportunity.\n\n
            Warm regards,\n
            The Tutorium Team`;

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
                    subject: "Congratulations! You're a Tutorium Tutor",
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
