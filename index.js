//code for email verification
const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "your_email@example.com",
    pass: "your_password",
  },
});

// Function to send verification email
function sendVerificationEmail(to, verificationToken) {
  const mailOptions = {
    from: "your_email@example.com",
    to: to,
    subject: "Email Verification",
    text: `Please click on the following link to verify your email: http://yourdomain.com/verify/${verificationToken}`,
    html: `<p>Please click on the following link to verify your email:</p><p><a href="http://yourdomain.com/verify/${verificationToken}">Verify Email</a></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
