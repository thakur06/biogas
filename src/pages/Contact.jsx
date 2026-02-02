import React, { useState } from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedHQ, setSelectedHQ] = useState('us'); // Default to US

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        msg: "",
      });
    }, 1000);
  };

  const headquarters = {
    us: {
      name: "US Headquarter",
      flag: "🇺🇸",
      logo: "https://biogaseng.com/images/contact/us_office.jpg",
      address: "3816 Stineman Ct, Suite #203\nLong Beach, CA 90808, USA",
      email: "info@biogaseng.com",
      phone: "+1 (555) 123-4567"
    },
    india: {
      name: "India Headquarter",
      flag: "🇮🇳",
      logo: "https://biogaseng.com/images/contact/india_office.jpg",
      address: "Tech Park, Sector 62\nNoida, Uttar Pradesh 201301, India",
      email: "india@biogaseng.com",
      phone: "+91 123 456 7890"
    }
  };

  const currentHQ = headquarters[selectedHQ];

  return (
    <div className="bg-black -mt-16 text-black">
      <div className="h-16 bg-black"></div>

      <div className="min-h-full bg-white py-6 sm:py-12 px-4 sm:px-6 lg:px-12 mt-4" >
        <div className="max-w-full mx-auto bg-white p-4 sm:p-8">
          <p className="text-gray-600 mb-3 sm:mb-5 uppercase font-helvetica-light text-xs sm:text-sm">
            Let's work together
          </p>
          <h1 className="font-lato-thin text-3xl sm:text-4xl lg:text-5xl text-black font-semibold mb-6 sm:mb-0">
            How Can We Help?
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 sm:space-y-8 md:space-y-0">
            {/* Left Side - Details */}
            <div className="flex-1">
              <p className="text-black mt-4 sm:mt-10 font-helvetica-light font-semibold text-sm sm:text-base">Connect with one of our global teams regarding an upcoming project or transformation need.</p>

              {/* Headquarter Radio Buttons */}
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* US Radio Button */}
                  <label className={`flex-1 cursor-pointer border-2 rounded-lg p-3 sm:p-4 transition-all ${selectedHQ === 'us' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input
                      type="radio"
                      name="headquarter"
                      value="us"
                      checked={selectedHQ === 'us'}
                      onChange={(e) => setSelectedHQ(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedHQ === 'us' ? 'border-green-600' : 'border-gray-300'}`}>
                        {selectedHQ === 'us' && <div className="w-3 h-3 rounded-full bg-green-600"></div>}
                      </div>
                      <span className="text-xl sm:text-2xl">{headquarters.us.flag}</span>
                      <span className="font-bold text-gray-900 uppercase tracking-wide text-xs sm:text-sm font-helvetica-light">
                        US Headquarter
                      </span>
                    </div>
                  </label>

                  {/* India Radio Button */}
                  <label className={`flex-1 cursor-pointer border-2 rounded-lg p-3 sm:p-4 transition-all ${selectedHQ === 'india' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input
                      type="radio"
                      name="headquarter"
                      value="india"
                      checked={selectedHQ === 'india'}
                      onChange={(e) => setSelectedHQ(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedHQ === 'india' ? 'border-green-600' : 'border-gray-300'}`}>
                        {selectedHQ === 'india' && <div className="w-3 h-3 rounded-full bg-green-600"></div>}
                      </div>
                      <span className="text-xl sm:text-2xl">{headquarters.india.flag}</span>
                      <span className="font-bold text-gray-900 uppercase tracking-wide text-xs sm:text-sm font-helvetica-light">
                        India Headquarter
                      </span>
                    </div>
                  </label>
                </div>

                {/* Headquarter Details */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Logo */}
                  <div className="h-40 sm:h-48 overflow-hidden bg-gray-100">
                    <img
                      src={currentHQ.logo}
                      alt={currentHQ.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="p-4 sm:p-6 bg-white space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FiMapPin className="text-green-600 mt-1 shrink-0 text-sm sm:text-base" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Address</p>
                        <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">{currentHQ.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FiMail className="text-green-600 mt-1 shrink-0 text-sm sm:text-base" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Email</p>
                        <a href={`mailto:${currentHQ.email}`} className="text-xs sm:text-sm text-blue-600 hover:underline break-all">{currentHQ.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FiPhone className="text-green-600 mt-1 shrink-0 text-sm sm:text-base" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Phone</p>
                        <a href={`tel:${currentHQ.phone.replace(/\s/g, '')}`} className="text-xs sm:text-sm text-blue-600 hover:underline">{currentHQ.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm font-medium">
                    ✅ Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-sm sm:text-base border-b border-gray-400 focus:border-blue-600 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-sm sm:text-base border-b border-gray-400 focus:border-blue-600 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-sm sm:text-base border-b border-gray-400 focus:border-blue-600 outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="msg"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    rows={4}
                    value={formData.msg}
                    onChange={handleChange}
                    className="w-full px-2 py-2 text-sm sm:text-base border-b border-gray-400 focus:border-blue-600 outline-none transition resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded-xs font-medium text-sm sm:text-base hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
