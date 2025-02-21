import React from "react";
import { motion } from "framer-motion";
import { FaPen, FaBook, FaPencilRuler, FaEraser, FaPaintBrush, FaClipboard } from "react-icons/fa";

const whatsappNumber = "+923136588108"; // Replace with your WhatsApp number

const stationeryItems = [
  { id: 1, title: "Notebooks", icon: <FaBook />, description: "High-quality notebooks for students and professionals." },
  { id: 2, title: "Pens & Pencils", icon: <FaPen />, description: "A variety of pens and pencils for smooth writing." },
  { id: 3, title: "Rulers & Scales", icon: <FaPencilRuler />, description: "Precision rulers and scales for accurate measurements." },
  { id: 4, title: "Erasers & Sharpeners", icon: <FaEraser />, description: "Top-quality erasers and sharpeners for everyday use." },
  { id: 5, title: "Paint & Brushes", icon: <FaPaintBrush />, description: "Premium colors and brushes for artistic creations." },
  { id: 6, title: "Clipboards & Files", icon: <FaClipboard />, description: "Organize your documents with sturdy clipboards and files." },
];

const Stationery = () => {
  return (
    <section className="bg-light py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-10">Stationery Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stationeryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#f4f4f4] p-6 rounded-2xl text-center shadow-lg hover:scale-105 hover:shadow-2xl transition"
            >
              <div className="text-5xl text-primary mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello, I'm interested in ${encodeURIComponent(item.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-secondary transition duration-300 shadow-md"
              >
                Buy
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stationery;
