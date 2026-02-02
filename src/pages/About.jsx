import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="bg-black -mt-16 text-white">
      <div className="h-16 lg:hidden bg-black"></div>

      {/* Hero Section with Company Image */}
      <div className="relative h-[70vh] md:h-[70vh] flex flex-col justify-end pb-8 md:pb-12 overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://biogaseng.com/images/contact/1.jpg"
          alt="About Biogas Engineering"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-500 font-bold uppercase tracking-[0.3em] mb-4 text-xs font-helvetica-light shadow-black drop-shadow-md"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white font-lato-thin uppercase tracking-tight mb-6 md:mb-8 drop-shadow-lg"
          >
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-500 font-extrabold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 font-helvetica-light leading-relaxed"
          >
            Leading the transition to a sustainable future through innovative waste-to-energy solutions and world-class engineering expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <button className="bg-white text-black px-10 py-3 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-24 min-h-screen text-gray-900">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 font-helvetica-light">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-lato-thin">Our Mission</h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed font-semibold opacity-70">
                At Biogas Engineering, we believe that organic waste shouldn't just be discarded—it should be harvested. Our mission is to provide cutting-edge technology and engineering services that transform environmental challenges into renewable energy opportunities.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-semibold opacity-70">
                With decades of collective experience, our team specializes in the design, installation, and optimization of biogas systems that are efficient, reliable, and environmentally responsible.
              </p>
            </div>
            <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center border border-gray-100 shadow-inner">
              <img src="https://biogaseng.com/images/contact/1.jpg" className="text-gray-400 font-medium h-80 w-full object-cover rounded-3xl" />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-16 text-center font-lato-thin uppercase tracking-tight">
              Our <span className="text-green-600">Leadership</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-12">
              {[
                {
                  name: "Dr. Arjun Mehta",
                  role: "Chief Technology Officer",
                  image: "https://biogaseng.com/images/about/Gautam.JPG",
                  bio: "Pioneering researcher in anaerobic digestion with 15+ years of experience in biogas plant optimization."
                },
                {
                  name: "Sarah Jenkins",
                  role: "Head of Operations",
                  image: "https://biogaseng.com/images/about/Dave%20Wambold%20-%20original.jpg",
                  bio: "Expert in scaling sustainable infrastructure projects across three continents."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Dennis%20Doody%20-%20color.jpg",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Jay%20Maruska%20-%20color.jpg",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Zachary%20Venable.png",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Dennis%20Doody%20-%20color.jpg",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Nek%20Singh%20Thakur%20-%20original.jpg",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Madhur%20Mittal%20-%20color.jpg",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                },
                {
                  name: "Michael Chen",
                  role: "Principal Engineer",
                  image: "https://biogaseng.com/images/about/Tinju%20Panicker%20-%20original.jpg",
                  bio: "Lead structural engineer specializing in high-efficiency reactor design and safety systems."
                }
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-60 h-60 mb-8 relative rounded-full overflow-hidden border-2 border-transparent group-hover:border-green-500 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-lato-thin uppercase tracking-widest">{member.name}</h3>
                  <p className="text-green-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 font-helvetica-light">{member.role}</p>
                  <p className="text-gray-500 font-helvetica-light text-sm leading-relaxed max-w-xs mx-auto opacity-80">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-lato-thin">INNOVATION</h3>
              <p className="text-gray-500 font-helvetica-light text-sm font-semibold opacity-80">
                We constantly push the boundaries of what's possible in anaerobic digestion and gas purification.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-lato-thin">INTEGRITY</h3>
              <p className="text-gray-500 font-helvetica-light text-sm font-semibold opacity-80">
                Our commitment to safety and technical excellence ensures long-term project success and client trust.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-lato-thin">SUSTAINABILITY</h3>
              <p className="text-gray-500 font-helvetica-light text-sm font-semibold opacity-80">
                Every project we undertake is a step toward a circular economy and reduced carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
