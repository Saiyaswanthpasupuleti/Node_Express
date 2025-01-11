const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ba6bffe64ecbd0",
        pass: "9d30007ab3fd7f",
      },
    });

    // Email details
    const mailOptions = {
      from: "saiyaswanths959@gmail.com", // Sender's email
      to, // Receiver's email
      subject, // Email subject
      text, // Email body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.response);
    res.status(200).json({ message: "Email sent successfully!", info });
  } catch (error) {
    console.error("Error while sending email:", error.message);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
