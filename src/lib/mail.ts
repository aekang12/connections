import type { Request, Response } from 'express';
import type { SentMessageInfo } from 'nodemailer';

const express = require('express');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json()); // Parse JSON data

app.post('/send', [
    check('email').isEmail().withMessage('Invalid Email Address'),
    check('subject').notEmpty().withMessage('Subject is required'),
    check('message').notEmpty().withMessage('Message is required')
], (req : Request, res : Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your.email@gmail.com',
            pass: 'your-google-app-password'
        }
    });

    const mailOptions = {
        from: `"${req.body.email}" <${req.body.email}>`,
        to: 'jm6078390@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error : Error | null, info : SentMessageInfo) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong.');
        } else {
            res.status(200).send('Email sent successfully');
        }
    });
});

app.get('/success', (req : Request, res : Response) => {
    res.send('<h1>Your Message was Successfully Sent!</h1>');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});