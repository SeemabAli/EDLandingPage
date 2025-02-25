import { useState } from "react";
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

    const emailParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_lvnkxlk", // Replace with your EmailJS Service ID
        "template_04rbo7b", // Replace with your EmailJS Template ID
        emailParams,
        "RS5vkAtL0Y5yzzY2a" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
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
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <p className="text-gray-600 mb-4">Chakwal, Punjab, Pakistan</p>
              <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.5737702269275!2d72.86937358737454!3d32.909435809171754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39205dc030152627%3A0x62a63802edd43a7d!2sTotal%20Soft%20Solutions!5e0!3m2!1sen!2s!4v1740480618614!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
