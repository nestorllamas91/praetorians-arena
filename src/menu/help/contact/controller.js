import nodemailer from 'nodemailer';

import { handleResponseSuccess, HandlerResponseError } from '@/utils/handlers';

const sendMail = async (request, response, next) => {
  try {
    const { name, email, subject, message } = request.body;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        player: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const mail = {
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: `Néstor Llamas <${process.env.EMAIL_USER}>`,
      subject,
      html: `<h1>Praetorians Arena Contact Form</h1>
          <span>From: ${name}</span><br />
          <span>Email: ${email}</span><br />
          <span>Subject: ${subject}</span><br />
          <br />
          <br />
          <p>${message.replace(/\r\n|\n|\r/g, '<br />')}</p>`
    };
    await transporter.sendMail(mail);
    handleResponseSuccess(response, null, __filename);
  } catch (error) {
    next(new HandlerResponseError(500, error, __filename));
  }
};

export { sendMail };
