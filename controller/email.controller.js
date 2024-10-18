import Email from "../model/email.model.js";
import nodemailer from 'nodemailer';



const EMAIL = process.env.EMAIL ;
const PASSWORD =process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your email provider
    auth: {
        user: 'urvashi76upadhyay@gmail.com', // Your email address
        pass: 'orwa nuok ivex hsjf', // Your email password
    },
});

export const sendEmail = async(req,res)=>{
    const { name, email, message } = req.body;

    const emailData = new Email({ name, email, message });

    try {
        // Save email data to the database
        await emailData.save();

        // Set up email options
        const mailOptions = {
            from: emailData.email,
            to: 'urvashi76upadhyay@gmail.com', // Your email address
            subject: `Message from ${emailData.name}`,
            text: emailData.message,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent: ' + info.response);
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send(error.toString());
    }

};