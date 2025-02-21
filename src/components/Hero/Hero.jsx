import { useState } from "react";
import { MdSlowMotionVideo, MdClose } from "react-icons/md";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";
import { FadeUp, SlideRight } from "../../utility/animation.jsx";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-light overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-20 lg:max-w-[500px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              <motion.p
                variants={SlideRight(0.4)}
                initial="hidden"
                animate="visible"
                className="text-primary uppercase font-thin text-lg"
              >
                The All-in-One Education Management Platform!
              </motion.p>
              Welcome to <br />
              <span className="text-secondary">E-Bridge</span>
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={() => setShowVideo(true)}
                className="primary-btn flex items-center gap-2 group"
              >
                Watch Demo
                <MdSlowMotionVideo className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-light p-1 rounded-lg w-[90%] md:w-[60%] lg:w-[50%]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-black text-3xl hover:text-red-600 transition"
            >
              <div className="absolute -top-6 -right-6 bg-red-600 text-white rounded-full p-2 cursor-pointer hover:bg-red-700 transition" onClick={() => setShowVideo(false)}>
                <MdClose className="text-xl" />
              </div>
            </button>
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/6stlCkUDG_s?si=PrZ-T9H3f_jNw548" // Change to your video URL
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
