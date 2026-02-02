import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Fi from "react-icons/fi";

const marketsData = {
  dairies: {
    title: "Dairies",
    headline: "Dairy RNG Balance-of-Plant",
    description: "The dairy industry generates significant organic waste streams that can be converted into valuable renewable natural gas. We design and build the systems that process and upgrade biogas after the digester.",
    stats: [
      { label: "Market Demand", value: "Growing" },
      { label: "Revenue Stream", value: "RNG & Credits" },
    ],
    items: [
      {
        Icon: Fi.FiFilter,
        title: "Pretreatment",
        description: "H₂S removal and moisture control specific to dairy manure characteristics.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=800&q=80",
        color: "text-amber-500",
        bg: "from-amber-500/10 to-transparent"
      },
      {
        Icon: Fi.FiTrendingUp,
        title: "Upgrading",
        description: "Gas compression, polishing, and interconnect integration.",
        image: "https://images.unsplash.com/photo-1581092336129-768cb7de0011?auto=format&fit=crop&w=800&q=80",
        color: "text-blue-500",
        bg: "from-blue-500/10 to-transparent"
      },
      {
        Icon: Fi.FiGrid,
        title: "Modular Skids",
        description: "Prefabricated systems to minimize disruption to farm operations.",
        image: "https://images.unsplash.com/photo-1581094285065-260c5cb2ed5a?auto=format&fit=crop&w=800&q=80",
        color: "text-green-500",
        bg: "from-green-500/10 to-transparent"
      }
    ]
  },
  landfills: {
    title: "Landfills",
    headline: "Landfill Gas to RNG",
    description: "Landfill gas is variable by nature — we design systems that stay stable, efficient, and safe under changing conditions. One of the largest untapped sources of renewable energy.",
    stats: [
      { label: "Current Pricing", value: "$15-25/MMBtu" },
      { label: "Carbon Intensity", value: "High Value" },
    ],
    items: [
      {
        Icon: Fi.FiWind,
        title: "Gas Collection",
        description: "Blower and compressor sizing for seasonal variation.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
        color: "text-gray-500",
        bg: "from-gray-500/10 to-transparent"
      },
      {
        Icon: Fi.FiAlertCircle,
        title: "Compliance",
        description: "Flare, engine, and emissions architecture for dynamic conditions.",
        image: "https://images.unsplash.com/photo-1516937941348-c09e55448856?auto=format&fit=crop&w=800&q=80",
        color: "text-red-500",
        bg: "from-red-500/10 to-transparent"
      },
      {
        Icon: Fi.FiZap,
        title: "Energy Generation",
        description: "Integration of upgrading systems (membrane, PSA) for pipeline injection.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
        color: "text-yellow-500",
        bg: "from-yellow-500/10 to-transparent"
      }
    ]
  },
  wastewater: {
    title: "Wastewater",
    headline: "WWTP Biogas Upgrading",
    description: "From digester optimization to RNG production, we maximize the energy potential of your wastewater treatment process. Create new revenue and achieve carbon-neutral operations.",
    stats: [
      { label: "US Facilities", value: "16,000+" },
      { label: "Potential", value: "1.6B ft³/day" },
    ],
    items: [
      {
        Icon: Fi.FiDroplet,
        title: "Gas Cleaning",
        description: "Siloxane and VOC removal critical for engine or RNG service.",
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80",
        color: "text-cyan-500",
        bg: "from-cyan-500/10 to-transparent"
      },
      {
        Icon: Fi.FiRefreshCw,
        title: "Retrofits",
        description: "Brownfield retrofits with minimal outage impact to existing plant.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
        color: "text-indigo-500",
        bg: "from-indigo-500/10 to-transparent"
      },
      {
        Icon: Fi.FiActivity,
        title: "Optimization",
        description: "Controls modernization and safety compliance for 24/7 operation.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        color: "text-teal-500",
        bg: "from-teal-500/10 to-transparent"
      }
    ]
  },
  co2: {
    title: "CO₂ Liquefaction",
    headline: "Capture & Monetization",
    description: "Turn a waste stream into a revenue stream. We help clients capture, purify, and monetize CO₂ for industrial, food-grade, or sequestration applications.",
    stats: [
      { label: "Benefit", value: "New Revenue" },
      { label: "Impact", value: "Lower CI Score" },
    ],
    items: [
      {
        Icon: Fi.FiCloud,
        title: "Purification",
        description: "Process design for CO₂ purification, drying, and liquefaction.",
        image: "https://images.unsplash.com/photo-1529148482759-b35b25c5f219?auto=format&fit=crop&w=800&q=80",
        color: "text-sky-500",
        bg: "from-sky-500/10 to-transparent"
      },
      {
        Icon: Fi.FiArchive,
        title: "Storage",
        description: "Modular skid fabrication for compression, refrigeration, and storage.",
        image: "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?auto=format&fit=crop&w=800&q=80",
        color: "text-blue-600",
        bg: "from-blue-600/10 to-transparent"
      },
      {
        Icon: Fi.FiTarget,
        title: "Compliance",
        description: "Fully automated controls for pressure and purity monitoring.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        color: "text-green-500",
        bg: "from-green-500/10 to-transparent"
      }
    ]
  },
  international: {
    title: "International",
    headline: "Global Project Delivery",
    description: "Providing complete engineering, procurement, and construction services for biomethane facilities worldwide. Our modular systems are designed for fast deployment and local code compliance.",
    stats: [
      { label: "Hub", value: "India & USA" },
      { label: "Expansion", value: "SE Asia / EU" },
    ],
    items: [
      {
        Icon: Fi.FiGlobe,
        title: "Global EPC",
        description: "Full EPC design and modular fabrication for international markets.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        color: "text-purple-500",
        bg: "from-purple-500/10 to-transparent"
      },
      {
        Icon: Fi.FiTruck,
        title: "Logistics",
        description: "Local vendor qualification and supply chain coordination.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        color: "text-orange-500",
        bg: "from-orange-500/10 to-transparent"
      },
      {
        Icon: Fi.FiUsers,
        title: "Support",
        description: "Training and remote technical support for global operators.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        color: "text-blue-500",
        bg: "from-blue-500/10 to-transparent"
      }
    ]
  }
};

export const Markets = () => {
  const [activeTab, setActiveTab] = useState('dairies');

  return (
    <div className="bg-black text-white min-h-screen -mt-16">
      <div className="h-16 lg:hidden bg-black"></div>

      {/* Hero Header Section */}
      <div className="relative h-[70vh] md:h-[70vh] flex flex-col justify-end pb-8 md:pb-12 overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=1920&q=80"
          alt="Markets Header"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 font-bold uppercase tracking-[0.3em] mb-4 text-xs font-helvetica-light shadow-black drop-shadow-md"
          >
            Industries We Serve
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white font-lato-thin uppercase tracking-tight mb-8 md:mb-12 drop-shadow-2xl"
          >
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600 font-extrabold">Markets</span>
          </motion.h1>

          {/* Tabs Integrated in Header */}
          <div className="flex flex-wrap gap-3">
            {Object.keys(marketsData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border backdrop-blur-md ${activeTab === key
                  ? "bg-green-600 text-white border-green-600 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  : "bg-black/40 text-gray-300 border-white/20 hover:bg-black/60 hover:border-white/40"
                  }`}
              >
                {marketsData[key].title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20 text-gray-900 min-h-screen">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-lato-thin text-gray-900 uppercase tracking-tight">{marketsData[activeTab].headline}</h2>
                <p className="text-lg md:text-xl text-gray-600 font-helvetica-light leading-relaxed mb-10 max-w-3xl mx-auto">
                  {marketsData[activeTab].description}
                </p>

                {/* Stats Row - Redesigned */}
                <div className="flex justify-center gap-8 md:gap-16">
                  {marketsData[activeTab].stats.map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 min-w-[140px] md:min-w-[180px]">
                      <div className="text-3xl md:text-4xl font-bold text-green-600 font-lato-thin mb-2">{stat.value}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Grid Cards Layout - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <AnimatePresence mode="wait">
              {marketsData[activeTab].items.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <motion.div
                    key={activeTab + index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-linear-${item.bg} opacity-60 mix-blend-multiply`}></div>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>

                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {IconComponent && (
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-6 group-hover:scale-110 transition-transform duration-500">
                            <IconComponent className={`text-5xl text-white drop-shadow-lg`} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-3 font-lato-thin uppercase tracking-tight text-gray-900 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base text-gray-600 font-helvetica-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <button className="flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                        Learn More <Fi.FiArrowRight className="text-lg" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* CTA Section - Redesigned */}
          <div className="relative mt-32 p-12 md:p-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[3rem] text-white text-center shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600 rounded-full blur-[120px] opacity-10"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-lato-thin uppercase tracking-tight">
                  Ready to Expand Your <span className="text-green-400">Potential?</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 font-helvetica-light leading-relaxed">
                  Whether you are in agriculture, industry, or municipal management, we have the expertise to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-green-500 transition-all shadow-lg hover:shadow-green-600/50"
                  >
                    Contact an Expert
                  </a>
                  <a
                    href="/services"
                    className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-all"
                  >
                    View Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
