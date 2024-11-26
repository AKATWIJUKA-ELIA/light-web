// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     host: 'smtp.example.com', // Replace with your SMTP server
//     port: 465, // Replace with your SMTP port
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: 'eliaakjtrnq@gmail.com', // Replace with your email
//         pass: process.env.PASSWORD, // Replace with your email password
//     },
// });

// const sendmail = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === 'POST') {
//         const { email,subject,message } = req.body;

//         try {
//             await transporter.sendMail({
//                 from: email, // Replace with your email
//                 to: 'eliaakjtrnq@gmail.com', // Send to the user's email
//                 subject: subject,
//                 text: message,
//             });

//             return res.status(200).json({ message: 'Email sent successfully' });
//         } catch (error) {
//             console.error('Error sending email:', error);
//             return res.status(500).json({ message: 'Error sending email' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         return res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// };

// export default sendmail;