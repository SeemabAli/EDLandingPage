import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_lvnkxlk", // Replace with your EmailJS Service ID
        "template_04rbo7b", // Replace with your EmailJS Template ID
        formData,
        "RS5vkAtL0Y5yzzY2a" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setSuccess("Failed to send message. Try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-dark mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <FaPhoneAlt className="text-primary text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+923136588108</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <FaEnvelope className="text-primary text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">tssolutionspk@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">Chakwal, Punjab, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4">
              <label className="block text-lg font-medium text-dark">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-dark">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-dark">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-center text-green-600 mt-4">{success}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
