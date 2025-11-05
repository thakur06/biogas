import React from 'react'

export const Terms = () => {
  return (
    <div className="min-h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
        <p className="text-gray-700 mb-4">These Terms and Conditions govern your use of our website and services.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Use of Service</h2>
        <p className="text-gray-700 mb-4">You agree to use the service in accordance with applicable laws and these Terms.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">All content and materials are owned by or licensed to us.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">We are not liable for indirect or consequential damages arising from use of the service.</p>

        <p className="text-gray-600">If you have questions about these Terms, please contact us.</p>
      </div>
    </div>
  )
}


