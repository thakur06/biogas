import React from 'react';

export const Card = ({ Icon, title, description }) => {
  return (
    <div className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
        {Icon && <Icon className="text-2xl text-green-600 group-hover:text-white transition-colors duration-300" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
