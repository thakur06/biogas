import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  return (
    <div className="bg-black -mt-16 text-black">
      <div className="h-16 bg-black"></div>

      <div className="min-h-full bg-white py-12 px-4 sm:px-6 lg:px-8 mt-4" >
        <div className="max-w-6xl mx-auto bg-white  p-8">
          <p className="text-gray-600 mb-5 uppercase">
          Let's work together
          </p>
          <h1 className="font-lato-thin text-5xl text-black font-semibold">How Can We Help?
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
            {/* Left Side - Details */}
            <div className="flex-1">
             <p className="text-black mt-10 font-helvetica-light font-semibold">Connect with one of our global teams regarding an upcoming project or transformation need.</p>
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="w-full px-2 py-2 border-b border-gray-400 focus:border-blue-600 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="w-full px-2 py-2 border-b border-gray-400 focus:border-blue-600 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="w-full px-2 py-2 border-b border-gray-400 focus:border-blue-600 outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="msg"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="w-full px-2 py-2 border-b border-gray-400 focus:border-blue-600 outline-none transition resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded-xs font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition disabled:opacity-50"
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
