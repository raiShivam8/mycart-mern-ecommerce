const axios = require("axios");

const sendMail = async (to, subject, html) => {
  console.log("Sending email to:", to);

  const res = await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "MyCart",
        email: process.env.SENDER_EMAIL,
      },
      to: [
        {
          email: to,
        },
      ],
      subject,
      htmlContent: html,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      timeout: 30000,
    }
  );

  console.log("Email sent:", res.data?.messageId || "success");
  return res.data;
};

module.exports = sendMail;