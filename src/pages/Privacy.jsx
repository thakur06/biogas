import React from 'react'

export const Privacy = () => {
  return (
    <div className="min-h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We collect information you provide and technical data from your use of the service.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Information</h2>
        <p className="text-gray-700 mb-4">We use your information to provide, maintain, and improve our services.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Sharing of Information</h2>
        <p className="text-gray-700 mb-4">We do not sell your personal information. We may share with service providers under confidentiality.</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Your Rights</h2>
        <p className="text-gray-700 mb-4">You may request access, correction, or deletion of your personal data, subject to applicable law.</p>

        <p className="text-gray-600">If you have questions about this Privacy Policy, please contact us.</p>
      </div>
    </div>
  )
}


