import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password for Gmail
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email server is ready to take our messages');
  }
});

export const sendContactEmail = async (contactData) => {
  const { name, email, phone, message } = contactData;
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Contact Message from ${name} - CommunityCrew`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">CommunityCrew Contact</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">New message received</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6366f1;">Name:</strong>
            <p style="margin: 5px 0; color: #666; font-size: 16px;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6366f1;">Email:</strong>
            <p style="margin: 5px 0; color: #666; font-size: 16px;">${email}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6366f1;">Phone:</strong>
            <p style="margin: 5px 0; color: #666; font-size: 16px;">${phone}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6366f1;">Message:</strong>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1; margin-top: 10px;">
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This message was sent from the CommunityCrew website contact form.
            </p>
            <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;">
              Reply directly to: <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
New Contact Message from CommunityCrew Website

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This message was sent from the CommunityCrew website contact form.
Reply directly to: ${email}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};
