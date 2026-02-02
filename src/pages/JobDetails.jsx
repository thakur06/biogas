import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../constants/Job";
import careersBg from "../assets/images/careers_bg.jpg";

export const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: null,
    referralCode: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application for ${job.title} submitted successfully!`);
  };

  const scrollToForm = () => {
    document
      .getElementById("application-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  if (!job) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg">Job not found</p>
        <Link to="/careers" className="text-blue-600 hover:underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 -mt-16">
      {/* ===== Hero Section ===== */}
      <div className="bg-black "></div>
      <div
        className="relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${careersBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <p className="text-gray-300">
              📍 <span className="font-medium">{job.location}</span>
            </p>
            <span className="hidden md:block text-gray-400">|</span>
            <p className="text-gray-300">
              💼 <span className="font-medium">{job.type}</span>
            </p>
          </div>
          <div>
            <button
              onClick={scrollToForm}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* ===== Job Details ===== */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <Link
          to="/careers"
          className="text-blue-600 hover:underline mb-8 inline-block"
        >
          ← Back to Careers
        </Link>

        <h2 className="text-2xl font-semibold mb-3">About the Role</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">{job.description}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* ===== Application Form ===== */}
        <div
          id="application-form"
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Apply for this Position
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Cover Letter (Optional)
                </label>
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Referral Code (Optional)
              </label>
              <input
                type="text"
                name="referralCode"
                onChange={handleChange}
                placeholder="Enter referral code if any"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
