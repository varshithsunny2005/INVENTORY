const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  try {
    // Create Email Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      
    });

    // Options for sending email
    const options = {
      from: sent_from,
      to: send_to,
      replyTo: reply_to,
      subject: subject,
      html: message,
    };

    // Send email
    const info = await transporter.sendMail(options);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
