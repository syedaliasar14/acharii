import nodemailer from "nodemailer";

export async function sendEmail(to: string, subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 465, // or 587 for TLS
    secure: true, // True for port 465, false for 587
    auth: {
      user: process.env.AWS_SES_SMTP_USER, // From AWS SES
      pass: process.env.AWS_SES_SMTP_PASS, // From AWS SES
    },
  });

  try {
    await transporter.sendMail({
      from: `"acharii" <no-reply@achariimarket.com>`,
      to,
      subject,
      text,
    });

    return { message: "Email sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email failed to send");
  }
}