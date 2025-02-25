import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const whatsappNumber = "+923136588108"; // Replace with actual WhatsApp number

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://192.168.100.111:4000/api/v1/packages") // ✅ Fetching from API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch pricing plans");
        }
        return response.json();
      })
      .then((data) => {
        setPricingPlans(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading pricing plans...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="bg-[#D4E0ED] py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-dark pb-10">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <h2 className="text-xl font-semibold mb-2 text-dark hover:text-[#7BB661] transition-colors duration-200">
                {plan.title}
              </h2>
              <p className="text-primary text-2xl font-bold mb-4">{plan.price} {plan.currency}</p>
              <div className="w-full flex justify-center">
                <ul className="text-gray-600 text-sm text-left mb-4 space-y-2 w-full max-w-xs">
                  {[
                    { name: "Setup Charges", value: plan.setupCharges, available: plan.setupCharges > 0 },
                    { name: "Annual Discount", value: `${plan.annualDiscountPct}%`, available: plan.annualDiscountPct > 0 },
                    { name: "Branches", value: plan.branches, available: plan.branches > 0 },
                    { name: "Students", value: plan.students, available: plan.students > 0 },
                    { name: "Support Included", value: "Yes", available: plan.hasSupport }
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className={`font-medium flex items-center gap-2 ${feature.available ? "text-green-600" : "text-gray-400"}`}
                    >
                      <span className="w-5">{feature.available ? "✔" : "✖"}</span>
                      <span>{feature.name}: {feature.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                href={`https://wa.me/${whatsappNumber}?text=Hello, I'm interested in the ${encodeURIComponent(plan.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-secondary transition duration-300 shadow-md hover:shadow-lg"
              >
                Want to Buy?
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
