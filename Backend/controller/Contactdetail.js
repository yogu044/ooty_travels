require("dotenv").config();
const Contact = require("../model/Contact");
const nodemailer = require("nodemailer");

const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create mail transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
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

    // Send email
    await transporter.sendMail(mailOptions);

   

    // Respond to client
    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
  console.error("Contact form error:", error);

  if (error.response) {
    console.error("Nodemailer error response:", error.response);
  }
  
  res.status(500).json({
    message: "Internal server error",
    error: error.message,
  });
}
};

module.exports = { submitContactForm };
