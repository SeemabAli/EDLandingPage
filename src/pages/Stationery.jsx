import { useState, useEffect } from "react";
import { FaPen, FaBook, FaPencilRuler, FaEraser, FaPaintBrush, FaClipboard, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import "jspdf-autotable";

const stationeryItems = [
  {
    id: 1,
    title: "Notebooks",
    icon: FaBook,
    description: "Premium-quality notebooks designed for students, professionals, and creatives. From lined to blank pages, our collection ensures a smooth writing experience with durable binding and elegant designs.",
    image: "https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Pens & Pencils",
    icon: FaPen,
    description: "A wide selection of high-quality pens and pencils to enhance your writing and creativity. From smooth gel pens to precise mechanical pencils, we offer options for every need.",
    image: "https://images.unsplash.com/photo-1518826778770-a729fb53327c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Rulers & Scales",
    icon: FaPencilRuler,
    description: "Precision-engineered rulers and scales for students, engineers, and artists. Available in various sizes and materials for accurate measurements in studies and design projects.",
    image: "https://images.unsplash.com/photo-1529651795107-e5a141e34843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Erasers & Sharpeners",
    icon: FaEraser,
    description: "Essential stationery tools for clean corrections and precise sharpening. Our collection includes dust-free erasers and long-lasting sharpeners for an effortless writing experience.",
    image: "https://images.unsplash.com/photo-1441034281545-78296c3a6934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Paint & Brushes",
    icon: FaPaintBrush,
    description: "Unleash your creativity with our premium range of paints and brushes. From acrylics to watercolors, our artist-grade supplies are perfect for beginners and professionals alike.",
    image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Clipboards & Files",
    icon: FaClipboard,
    description: "Stay organized with durable clipboards and file folders. Ideal for students, teachers, and office professionals, our collection ensures your documents remain neat and accessible.",
    image: "https://plus.unsplash.com/premium_photo-1683309563529-05b8d9619e71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const StationeryPage = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ fullName: "", contact: "" });

  useEffect(() => {
    if (stationeryItems.length > 0) {
      setActiveItem(stationeryItems[0].id);
    }
  }, []);

  const scrollToSection = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const isValidOrder = () => {
    return customerInfo.fullName.trim() !== "" && /^[0-9]+$/.test(customerInfo.contact);
  };

  const updateCart = (item, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((cartItem) => cartItem.id !== item.id);
      }
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add items before confirming the order.");
      return;
    }

    // Construct order details in table format
    const tableHeader = "📦 *Ordered Items:*\n━━━━━━━━━━━━━━━━━━\n🔹 *Item*              | *Quantity*\n━━━━━━━━━━━━━━━━━━";
    const orderDetails = cart
      .map((item) => `📌 ${item.title.padEnd(20)} | ${item.quantity}`)
      .join("\n");
    const tableFooter = "━━━━━━━━━━━━━━━━━━";

    // Construct the full corporate-style message
    const message = `
📌 *New Quotation Request from EBridge.com*

Dear Supplier,

We kindly request a quotation for the following ordered items. Please review the details and provide a competitive quote.

📝 *Customer Details:*
👤 Name: ${customerInfo.fullName}
📞 Contact: ${customerInfo.contact}

${tableHeader}
${orderDetails}
${tableFooter}

Looking forward to your prompt response.

Best regards,  
  `;

    // Encode the message properly to prevent truncation
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the pre-filled message
    const whatsappURL = `https://wa.me/923136588108?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };




  return (
    <section className="min-h-screen relative">
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-10 px-6 justify-center w-full max-w-[1200px] mx-auto lg:flex hidden">
        <div className="flex gap-4 bg-[#D4E0ED] p-2 pt-3 rounded-lg">
          {stationeryItems.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 whitespace-nowrap 
              ${activeItem === id ? "bg-[#3E6899] text-white shadow-md" : "bg-gray-200 text-dark hover:bg-[#7BB661] hover:text-white"}`}
            >
              <Icon className="text-lg" /> {title}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:mt-20 mt-6">
        {/* Small & Medium Screens: Grid Layout */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {stationeryItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img src={item.image} alt={item.title} className="w-full max-w-[220px] h-40 object-cover rounded-lg shadow-md" />
              <h2 className="text-lg font-bold text-gray-900 mt-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => updateCart(item, (cart.find(cartItem => cartItem.id === item.id)?.quantity || 0) - 1)}
                  className="bg-red-500 text-white font-bold p-2 rounded-full shadow-md hover:bg-red-700 transition-all"
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  value={cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                  onChange={(e) => updateCart(item, Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-12 text-center border border-gray-300 rounded-lg p-1"
                  min="0"
                />
                <button
                  onClick={() => updateCart(item, (cart.find(cartItem => cartItem.id === item.id)?.quantity || 0) + 1)}
                  className="bg-[#3E6899] text-white font-bold p-2 rounded-full shadow-md hover:bg-[#7BB661] transition-all"
                >
                  <FaPlus />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large screens: Keep the original layout */}
        <div className="hidden md:block">
          {stationeryItems.map((item) => (
            activeItem === item.id && (
              <motion.div key={item.id} className="py-4 lg:py-4 flex flex-col md:flex-row items-center justify-center text-justify lg:text-left max-w-5xl">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img src={item.image} alt={item.title} className="w-full max-w-md h-64 mb-6 object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                  <p className="text-gray-600 mt-4 max-w-3xl mx-auto lg:mx-0 text-justify">{item.description}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <button onClick={() => updateCart(item, (cart.find(cartItem => cartItem.id === item.id)?.quantity || 0) - 1)} className="bg-red-500 text-white font-bold py-2 px-3 rounded-lg shadow-md hover:bg-red-700 transition-all">
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      value={cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                      onChange={(e) => updateCart(item, Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-16 text-center border border-gray-300 rounded-lg p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      min="0"
                    />
                    <button onClick={() => updateCart(item, (cart.find(cartItem => cartItem.id === item.id)?.quantity || 0) + 1)} className="bg-[#3E6899] text-white font-bold py-2 px-3 rounded-lg shadow-md hover:bg-[#7BB661] transition-all">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>


      {/* Cart Section */}
      <div className="fixed bottom-10 right-10 bg-white p-4 rounded-lg shadow-lg w-64">
        <h3 className="text-lg font-bold mb-2">Shopping Cart</h3>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title} ({item.quantity})</span>
                <button
                  onClick={() => setCart(cart.filter(cartItem => cartItem.id !== item.id))}
                  className="text-red-500 hover:text-red-700 transition-all"
                >
                  ❌
                </button>
              </div>
            ))}
            <button onClick={() => setShowOrderForm(true)} className="bg-green-500 text-white w-full py-2 mt-2 rounded-lg hover:bg-[#3E6899]">
              Submit Order
            </button>
          </>
        ) : (
          <p className="text-gray-500">Cart is empty</p>
        )}
      </div>


      {showOrderForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Submit Your Order</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="text-md font-semibold mb-2">Demand</h4>
              <div className="max-h-40 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-1 mb-1">
                    <span>{item.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">x{item.quantity}</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <input type="text" placeholder="Full Name" className="w-full border p-2 mt-4 rounded" value={customerInfo.fullName} onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })} required />
            <input type="text" placeholder="Contact Number" className="w-full border p-2 mt-2 rounded" value={customerInfo.contact} onChange={(e) => setCustomerInfo({ ...customerInfo, contact: e.target.value })} required />
            <button onClick={confirmOrder} disabled={!isValidOrder()} className={`w-full py-2 mt-4 rounded-lg ${isValidOrder() ? "bg-green-500 hover:bg-[#3E6899] text-white" : "bg-[#6A9DD7] text-white cursor-not-allowed hover:bg-[#3E6899]"}`}>Confirm Order</button>
            <button onClick={() => setShowOrderForm(false)} className="bg-red-500 text-white w-full py-2 mt-2 rounded-lg">Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StationeryPage;