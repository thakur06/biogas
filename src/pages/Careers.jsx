import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs } from "../constants/Job";
import careersBg from "../assets/images/careers_bg.jpg";

export const Careers = () => {
  return (
    <div className="bg-black -mt-16 text-white min-h-screen">
      <div className="h-16 bg-black"></div>

      {/* Hero */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${careersBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-full mx-auto text-center py-32 px-4 sm:px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Join Our <span className="text-green-600">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Explore exciting opportunities and grow your career with a company dedicated to sustainable energy innovation.
          </motion.p>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="bg-white py-24 text-gray-900">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-green-600 font-bold uppercase tracking-widest mb-4">
              Current Openings
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Open <span className="text-green-600">Positions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 text-gray-900 p-8 rounded-3xl border border-gray-100 hover:border-green-200 transition-all hover:shadow-xl group"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-500">
                    <span className="bg-gray-200 px-3 py-1 rounded-full">{job.location}</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{job.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {job.description}
                </p>
                <Link
                  to={`/careers/${job.id}`}
                  className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-all shadow-md"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
