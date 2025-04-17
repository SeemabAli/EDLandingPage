import BannerPng from "../../assets/education.png";
import { MdQrCodeScanner, MdEventNote } from "react-icons/md";
import { FaUserTie, FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { motion } from "framer-motion";

const FeaturesData = [
  { id: 1, title: "Admin, Teacher & Parent Apps", desc: "Dedicated apps for streamlined management.", icon: <FaUserTie />, bgColor: "#0063ff", delay: 0.1 },
  { id: 2, title: "QR-Based Attendance", desc: "Smart attendance tracking using QR codes.", icon: <MdQrCodeScanner />, bgColor: "#73bc00", delay: 0.2 },
  { id: 3, title: "Leave Application System", desc: "Easily manage leave requests online.", icon: <MdEventNote />, bgColor: "#fa6400", delay: 0.3 },
  { id: 4, title: "Daily Diary & Timetable", desc: "Stay updated with class schedules.", icon: <BiNotepad />, bgColor: "#fe6baa", delay: 0.4 },
  { id: 5, title: "Exam & Test Scheduling", desc: "Plan and manage exams effortlessly.", icon: <FaChalkboardTeacher />, bgColor: "#ff9800", delay: 0.5 },
  { id: 6, title: "Student Progress Reports", desc: "Daily insights for parents.", icon: <FaUserFriends />, bgColor: "#8e44ad", delay: 0.6 },
];

const Banner = () => {
  return (
    <section className="bg-[#D4E0ED] py-14 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Banner Image */}
        <div className="flex justify-center order-2 md:order-1">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Faster animation
            src={BannerPng}
            alt="School Management System"
            className="w-[550px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/* Banner Text & Features */}
        <div className="flex flex-col gap-8 order-1 md:order-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }} // Faster animation
            className="text-3xl md:text-4xl font-bold leading-snug text-center md:text-left"
          >
            Smart School Management – Integrated Apps for Teachers, Admin, and Parents with Advanced Features!
          </motion.h1>
          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FeaturesData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                className="flex items-center gap-4 p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition duration-200 transform hover:scale-105"
              >
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-12 h-12 rounded-lg flex justify-center items-center text-white text-2xl"
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;