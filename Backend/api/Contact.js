import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kingyogu505@gmail.com",
      replyTo: email,
      subject: "Customer Contact Details",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <p>This message was sent from your website contact form.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
