import axios from "axios";
import React, { useState } from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(
        "https://communitycrew-volunteer-backend.onrender.com/api/v1/message/send",
        { name, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      
      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      
      // Show success message
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || "Failed to send message. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have a question or want to work together? We'd love to hear from you!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>tulendra968@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Chhattisgarh, INDIA</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div>
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="banner">
            <form onSubmit={handleSendMessage}>
              <h2>Send us a Message</h2>
              <div className="form-row">
                <div className="form-group">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    value={name}
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  value={phone}
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  rows="6"
                  value={message}
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
