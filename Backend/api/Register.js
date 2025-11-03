import nodemailer from "nodemailer";

// Vercel automatically provides req & res, no need for express()
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, checkin, checkout, adult, child } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Main fields are required" });
    }

    // 🧠 Since Vercel doesn’t support MongoDB directly unless you connect manually,
    // we’ll skip admin.findOne() here. You can integrate MongoDB Atlas later.

    function formatDate(date) {
      if (!date) return "";
      const d = date instanceof Date ? date : new Date(date);
      return d.toISOString().split("T")[0];
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kingyogu505@gmail.com",
      subject: "Customer Details",
      text: `
Hello provider,

Customer details received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Check-in: ${formatDate(checkin)}
Check-out: ${formatDate(checkout)}
Adults: ${adult}
Children: ${child}

Thank you!
      `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(201)
      .json({ message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
