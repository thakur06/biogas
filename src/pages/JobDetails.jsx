import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../constants/Job";
import careersBg from "../assets/images/careers_bg.jpg";

export const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="text-center py-40 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-lato-thin uppercase tracking-widest text-gray-900 mb-6">Job not found</h2>
        <Link to="/careers" className="text-blue-600 font-bold uppercase tracking-widest text-xs hover:text-green-600 transition-colors">
          Return to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-gray-900 -mt-16">
      {/* ===== Black Header Spacer ===== */}
      <div className="h-16 bg-black"></div>

      {/* ===== Hero Section ===== */}
      <div
        className="relative h-[500px] bg-cover bg-center bg-no-repeat attachment-fixed"
        style={{ backgroundImage: `url(${careersBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col justify-center h-full text-center text-white px-4">
          <p className="text-blue-400 font-bold uppercase tracking-[0.3em] mb-6 text-xs font-helvetica-light">Current Opening</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 font-lato-thin uppercase tracking-tight">{job.title}</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            <span className="px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm text-sm uppercase tracking-widest font-bold">
              {job.location}
            </span>
            <span className="px-6 py-2 rounded-full bg-green-600 text-white text-sm uppercase tracking-widest font-bold shadow-lg shadow-green-600/20">
              {job.type}
            </span>
          </div>

          <div className="mt-8">
            <a
              href="mailto:careers@biogaseng.com"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all transform hover:scale-105"
            >
              Apply via Email
            </a>
          </div>
        </div>
      </div>

      {/* ===== Job Details ===== */}
      <div className="max-w-4xl mx-auto py-24 px-6">
        <Link
          to="/careers"
          className="text-gray-400 hover:text-black mb-12 inline-block font-bold text-xs uppercase tracking-widest transition-colors"
        >
          ← Back to Careers
        </Link>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 font-lato-thin uppercase tracking-wide border-b border-gray-100 pb-4">
            About the <span className="text-green-600">Role</span>
          </h2>
          <p className="text-lg text-gray-600 font-helvetica-light leading-relaxed font-light">
            {job.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-lato-thin uppercase tracking-widest text-gray-900">Responsibilities</h3>
            <ul className="space-y-4">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-600 font-helvetica-light text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-lato-thin uppercase tracking-widest text-gray-900">Requirements</h3>
            <ul className="space-y-4">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-600 font-helvetica-light text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0"></span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 p-12 bg-gray-50 rounded-[3rem] text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 font-lato-thin uppercase tracking-widest">Interested?</h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            We are always looking for talented individuals to join our mission. Send us your resume and cover letter.
          </p>
          <a
            href="mailto:careers@biogaseng.com"
            className="inline-block bg-black text-white px-12 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-600/30"
          >
            Send Application
          </a>
        </div>
      </div>
    </div>
  );
};
