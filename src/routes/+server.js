// import { render } from 'svelte-email';
// import Hello from '$lib/emails/Hello.svelte';
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'my_user',
//         pass: 'my_password'
//     }
// });

// const emailHtml = render({
//     component: Hello,
//     props: {
//         name: 'Svelte'
//     }
// });

// const options = {
//     from: 'you@example.com',
//     to: 'user@gmail.com',
//     subject: 'hello world',
//     html: emailHtml
// };

// transporter.sendMail(options);