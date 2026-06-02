const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (to, subject, html) => {
  const { data, error } = await resend.emails.send({
    from: "MyCart <onboarding@resend.dev>",
    to,
    subject,
    html,
  });

  if (error) {
    console.log("Email error:", error);
    throw new Error(error.message);
  }

  console.log("Email sent:", data.id);
  return data;
};

module.exports = sendMail;