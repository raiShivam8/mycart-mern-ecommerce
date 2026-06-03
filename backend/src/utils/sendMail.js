const nodemailer = require("nodemailer");

console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);
console.log("SMTP USER:", process.env.SMTP_USER);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  requireTLS: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  connectionTimeout: 60000,
  greetingTimeout: 60000,
  socketTimeout: 60000,
});

const sendMail = async (to, subject, html) => {
  console.log("Sending email to:", to);

  const info = await transporter.sendMail({
    from: `MyCart <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });

  console.log("Email sent:", info.messageId);

  return info;
};

module.exports = sendMail;