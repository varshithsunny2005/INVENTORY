import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ Added loading state

  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);     // ✅ Start loading
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="--btn --btn-primary"
              disabled={isLoading} 
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>+91 7601029697</p>
              </span>
              <span>
                <FaEnvelope />
                <p>Support@inventx.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Vishnu Bhargav, Jabalpur</p>
              </span>
              <span>
                <FaTwitter />
                <p>@_bhar.gav</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
