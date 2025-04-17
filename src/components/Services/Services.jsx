import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { GiPencilRuler } from "react-icons/gi";
import { BiBell, BiSupport } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, title: "Software Development", icon: <RiComputerLine />, delay: 0.1 },
  { id: 2, title: "Web Development", icon: <TbWorldWww />, delay: 0.2 },
  { id: 3, title: "Mobile Development", icon: <CiMobile3 />, delay: 0.3 },
  { id: 4, title: "Order Stationery", icon: <GiPencilRuler />, delay: 0.4 },
  { id: 5, title: "Marketing", icon: <BiBell />, delay: 0.5 },
  { id: 6, title: "Composing", icon: <BsClipboardData />, delay: 0.6 },
  { id: 7, title: "IT Consultancy", icon: <BsClipboardData />, delay: 0.7 },
  { id: 8, title: "24/7 Support", icon: <BiSupport />, delay: 0.8 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "anticipate" }
  },
  hover: { scale: 1.1, transition: { type: "spring", stiffness: 250 } },
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "anticipate" }}
          className="text-4xl font-bold text-dark pb-6"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "anticipate" }}
          className="text-lg max-w-2xl mx-auto mb-10"
        >
          We offer a diverse range of digital solutions to drive your business success.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-200 transition-all duration-200 hover:shadow-2xl cursor-pointer"
              onClick={() => navigate(`/services?id=${service.id}`)} // Navigate to services page
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-5xl text-primary hover:text-[#7BB661] mb-4"
              >
                {service.icon}
              </motion.div>
              <h2 className="text-xl font-semibold text-dark hover:text-[#7BB661] transition-colors duration-150">
                {service.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
