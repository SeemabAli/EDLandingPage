import React from "react";
import BannerPng from "../../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime, MdQrCodeScanner, MdEventNote } from "react-icons/md";
import { FaBookReader, FaUserTie, FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { FadeUp } from "../../utility/animation.jsx";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-[#D4E0ED]">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Smart School Management – Integrated Apps for Teachers, Admin, and Parents with Advanced Features!
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaUserTie className="text-2xl" />
                <p className="text-lg">Dedicated Admin, Teacher & Parent Apps</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.3)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdQrCodeScanner className="text-2xl" />
                <p className="text-lg">QR-Based Attendance System</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdEventNote className="text-2xl" />
                <p className="text-lg">Leave Application System</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.5)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <BiNotepad className="text-2xl" />
                <p className="text-lg">Daily Diary & Timetable Management</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaChalkboardTeacher className="text-2xl" />
                <p className="text-lg">Exam & Test Scheduling</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.7)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaUserFriends className="text-2xl" />
                <p className="text-lg">Daily Student Progress Reports for Parents</p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="School Management System"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
