import axios from "axios";
import React, { useState } from "react";
import { FaApplePay, FaBitcoin, FaCreditCard, FaGooglePay, FaPaypal } from "react-icons/fa";
import { SiStripe } from "react-icons/si";
import Logo from "./Logo";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("crypto");
  const [disableBtn, setDisableBtn] = useState(false);
  
  // Payment-specific form data
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setDisableBtn(true);
      
      // Prepare payment-specific data
      const paymentData = {
        name,
        email,
        message,
        amount,
        paymentMethod,
      };

      // Add payment-specific fields based on selected method
      switch (paymentMethod) {
        case "card":
          paymentData.cardDetails = {
            cardNumber,
            expiryDate,
            cvv,
            cardName,
          };
          break;
        case "crypto":
          paymentData.cryptoAddress = cryptoAddress;
          break;
        case "paypal":
          paymentData.paypalEmail = paypalEmail;
          break;
        case "stripe":
        case "apple":
        case "google":
          // These methods typically handle payment details through their own APIs
          break;
        default:
          break;
      }

      await axios
        .post(
          "https://communitycrew-volunteer-backend.onrender.com/api/v1/checkout",
          paymentData,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          window.location.href = res.data.result.url;
        });
    } catch (error) {
      setDisableBtn(false);
      console.error(error);
    }
  };

  const paymentMethods = [
    { id: "crypto", name: "Cryptocurrency", icon: FaBitcoin, color: "#f7931a" },
    { id: "card", name: "Credit/Debit Card", icon: FaCreditCard, color: "#2563eb" },
    { id: "paypal", name: "PayPal", icon: FaPaypal, color: "#0070ba" },
    { id: "stripe", name: "Stripe", icon: SiStripe, color: "#635bff" },
    { id: "apple", name: "Apple Pay", icon: FaApplePay, color: "#000000" },
    { id: "google", name: "Google Pay", icon: FaGooglePay, color: "#4285f4" },
  ];

  return (
    <section className="donate">
      <form onSubmit={handleCheckout}>
        <h2>Support Our Mission</h2>
        <div className="logo-container">
          <Logo size="large" />
        </div>
        
        <div className="form-group">
          <label>Help us make a difference in our community</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (USD)"
            required
          />
        </div>

        <div className="form-group">
          <label>Select Payment Method</label>
          <div className="payment-methods">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className={`payment-method ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <IconComponent 
                    style={{ color: method.color }} 
                    className="payment-icon"
                  />
                  <span>{method.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment-specific form fields */}
        {paymentMethod === "card" && (
          <div className="payment-details">
            <h3>Card Details</h3>
            <div className="form-group">
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Name on Card"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number (1234 5678 9012 3456)"
                required
              />
            </div>
            <div className="card-details-row">
              <div className="form-group">
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "crypto" && (
          <div className="payment-details">
            <h3>Cryptocurrency Details</h3>
            <div className="form-group">
              <input
                type="text"
                value={cryptoAddress}
                onChange={(e) => setCryptoAddress(e.target.value)}
                placeholder="Your Bitcoin Wallet Address"
                required
              />
            </div>
            <div className="crypto-info">
              <p>Please send your donation to the address above. We accept Bitcoin, Ethereum, and other major cryptocurrencies.</p>
            </div>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="payment-details">
            <h3>PayPal Details</h3>
            <div className="form-group">
              <input
                type="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                placeholder="Your PayPal Email Address"
                required
              />
            </div>
            <div className="paypal-info">
              <p>You will be redirected to PayPal to complete your donation securely.</p>
            </div>
          </div>
        )}

        {(paymentMethod === "stripe" || paymentMethod === "apple" || paymentMethod === "google") && (
          <div className="payment-details">
            <h3>{paymentMethod === "stripe" ? "Stripe Payment" : paymentMethod === "apple" ? "Apple Pay" : "Google Pay"}</h3>
            <div className="payment-info">
              <p>You will be redirected to {paymentMethod === "stripe" ? "Stripe" : paymentMethod === "apple" ? "Apple Pay" : "Google Pay"} to complete your donation securely.</p>
            </div>
          </div>
        )}

        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Message (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
          />
        </div>

        <button type="submit" className="btn" disabled={disableBtn}>
          {disableBtn ? "Processing..." : `Support with ${amount ? `$${amount}` : "$0"}`}
        </button>
      </form>
    </section>
  );
};

export default Donate;
