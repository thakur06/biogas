import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import heroVideo from "../assets/videos/hero_bg.mp4";

export const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen lg:h-[calc(100vh+64px)] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/80 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40 z-0 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-12 pb-20"
      >


        <div className="overflow-hidden mb-2 md:mb-4 md:mt-4 mt-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight font-lato-thin uppercase"
          >
            Sustainability Through
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8 md:mb-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight font-lato-thin uppercase"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-500 glow-green font-extrabold">Innovation</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl max-w-3xl font-helvetica-light font-light text-blue-50/90 tracking-wide mb-12"
        >
          Leading the way in advanced biogas engineering and renewable energy solutions for a cleaner tomorrow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6"
        >
          <Link to="/services">
            <button className="group bg-green-500 hover:bg-green-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transform hover:scale-105 flex items-center gap-2">
              Explore Services
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all transform hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-helvetica-light group-hover:text-white transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="text-white/70 text-2xl group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};
