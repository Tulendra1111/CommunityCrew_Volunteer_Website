import { Message } from "../models/message.js";
import { sendContactEmail } from "../utils/emailService.js";

export const postMessage = async (req, res, next) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please Fill Full Form!",
    });
  }
  try {
    // Save message to database
    await Message.create({ name, email, phone, message });
    
    // Send email notification
    const emailResult = await sendContactEmail({ name, email, phone, message });
    
    if (emailResult.success) {
      return res.status(201).json({
        success: true,
        message: "Message sent successfully! You will receive a confirmation email shortly.",
      });
    } else {
      // Message saved to database but email failed
      console.error('Email sending failed:', emailResult.error);
      return res.status(201).json({
        success: true,
        message: "Message saved successfully! (Email notification failed)",
      });
    }
  } catch (error) {
    console.error('Error in postMessage:', error);
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      const errorMessage = validationErrors.join(", ");
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
