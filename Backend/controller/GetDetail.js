require('dotenv').config();
const admin = require("../model/Details");
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  try {
    const { name, email, phone,  checkin, checkout, adult, child } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Main fields are required" });
    }

    const exist = await admin.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "Email already exists" });
    }

   
   

    
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
      }
    });
    function formatDate(date) {
        if (!date) return '';
        const d = (date instanceof Date) ? date : new Date(date);
        return d.toISOString().split('T')[0];
    }



    const mailOptions = {
      from: process.env.EMAIL_USER,
      to:"kingyogu505@gmail.com", 
      subject: 'Customer Details',
      text: `
        Hello provider,

        Customer details have been received successfully:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Check-in: ${formatDate(checkin)}
        Check-out: ${formatDate(checkout)}
        Adults: ${adult}
        Children: ${child}

       

        Thank you!
      `
    };

   
    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: "Data added and email sent successfully", user: newUser });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Server error", error: error.message });

  }
};

module.exports = register;
