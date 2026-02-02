import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs } from "../constants/Job";
import careersBg from "../assets/images/careers_bg.jpg";

export const Careers = () => {
  return (
    <div className="bg-black -mt-16 text-white">
      <div className="h-16 bg-black"></div>

      {/* Hero */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${careersBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto text-center py-32 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore exciting opportunities and grow your career with us.
          </motion.p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Open Positions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{job.location}</p>
              <p className="text-sm text-gray-600 mb-4 italic">{job.type}</p>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <Link
                to={`/careers/${job.id}`}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
