import { motion } from "framer-motion";
import HeroImage from "../assets/hero copy.png";

const ECommunity = () => {
  return (
    <section className="bg-light py-16 px-4 text-center flex flex-col items-center">
      <div className="container mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-primary mb-6"
        >
          Welcome to Our E-Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 mb-8"
        >
          Join a thriving community of educators, students, and professionals sharing knowledge,
          insights, and resources to empower learning and growth.
        </motion.p>
        <motion.a
          href="https://blog.education.com/category/for-teachers/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 hover:bg-primary hover:shadow-2xl"
        >
          Visit E-Community
        </motion.a>

      </div>
      <motion.img
        src={HeroImage}
        alt="E-Community Illustration"
        className="mt-8 w-full max-w-md rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </section>
  );
};

export default ECommunity;
