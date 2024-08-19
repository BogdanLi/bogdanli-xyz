import nodemailer from "nodemailer";

interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(payload: EmailPayload) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    ...payload,
  };

  return await transporter.sendMail(mailOptions);
}
