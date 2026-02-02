import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Fi from "react-icons/fi";

const servicesData = {
  engineering: {
    title: "Engineering",
    subtitle: "Front-End & Detail Design",
    description: "We provide complete engineering services for RNG and biogas facilities. Our multi-disciplinary team handles all technical aspects internally — ensuring faster coordination, clearer accountability, and a seamless hand-off to construction.",
    items: [
      {
        id: 1,
        title: "Front-End Engineering Design (FEED)",
        description: "The foundation of every successful project. We deliver comprehensive PFDs, P&IDs, and mass/energy balances.",
        icon: Fi.FiLayout,
        image: "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Process Flow Diagrams", "P&ID Development", "Mass & Energy Balances", "Capital Cost Estimations"],
        color: "text-blue-500",
        bg: "from-blue-500/10 to-transparent"
      },
      {
        id: 2,
        title: "Detailed Engineering Design",
        description: "Multi-disciplinary precision. extensive mechanical, electrical, civil, structural, and controls design.",
        icon: Fi.FiLayers,
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
        features: ["Mechanical Systems", "Electrical Power Distribution", "Civil & Structural Design", "Safety Systems"],
        color: "text-green-500",
        bg: "from-green-500/10 to-transparent"
      },
      {
        id: 3,
        title: "3D Modeling & Analysis",
        description: "Visualizing reality before construction. Advanced 3D modeling for stress analysis and clash detection.",
        icon: Fi.FiBox,
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
        features: ["3D Plant Modeling", "Pipe Stress Analysis", "Clash Detection", "Constructability Reviews"],
        color: "text-cyan-500",
        bg: "from-cyan-500/10 to-transparent"
      },
      {
        id: 4,
        title: "Controls & SCADA Integration",
        description: "Intelligent plant command. Custom SCADA design and control panel fabrication.",
        icon: Fi.FiCpu,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        features: ["Control Panel Design", "SCADA Architecture", "PLC Programming", "Remote Monitoring"],
        color: "text-purple-500",
        bg: "from-purple-500/10 to-transparent"
      }
    ]
  },
  epc: {
    title: "EPC",
    subtitle: "Turnkey Project Delivery",
    description: "We provide turnkey Engineering, Procurement, Construction (EPC) services. From engineering and fabrication to construction—all under a single contract/accountability to ensure seamless execution.",
    items: [
      {
        id: 1,
        title: "Project Planning & Design",
        description: "Complete design and engineering services from concept to detailed drawings, ensuring project predictability.",
        icon: Fi.FiMap,
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        features: ["Conceptual Design", "Permitting Support", "Detailed Engineering", "Cost Estimation"],
        color: "text-orange-500",
        bg: "from-orange-500/10 to-transparent"
      },
      {
        id: 2,
        title: "Procurement & Fabrication",
        description: "Strategic sourcing and vendor management for optimal cost. We manage procurement cost, quality, and key process equipment.",
        icon: Fi.FiShoppingBag,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        features: ["Strategic Sourcing", "Vendor Management", "Skid Fabrication", "Quality Assurance"],
        color: "text-red-500",
        bg: "from-red-500/10 to-transparent"
      },
      {
        id: 3,
        title: "Construction Management",
        description: "Expert construction management, QA/QC, and safety oversight. On-site installation and skilled craft workforce.",
        icon: Fi.FiTool,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        features: ["Site Management", "Safety Oversight", "Subcontractor Management", "Schedule Control"],
        color: "text-yellow-500",
        bg: "from-yellow-500/10 to-transparent"
      },
      {
        id: 4,
        title: "Commissioning & Startup",
        description: "Comprehensive testing and startup to ensure optimal performance. We provide a complete documentation package at turnover.",
        icon: Fi.FiPlayCircle,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
        features: ["Performance Testing", "Operator Training", "System Tuning", "Handover Documentation"],
        color: "text-green-500",
        bg: "from-green-500/10 to-transparent"
      }
    ]
  },
  landfills: {
    title: "Landfill Services",
    subtitle: "Gas to Energy Solutions",
    description: "Landfill gas is variable by nature — we design systems that stay stable, efficient, and safe under changing conditions. Untapped sources of renewable energy ready for development.",
    items: [
      {
        id: 1,
        title: "Blower & Flare Systems",
        description: "Design and integration of blower and compressor sizing for seasonal variation, and flare/engine interconnects.",
        icon: Fi.FiWind,
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
        features: ["Compressor Sizing", "Flare Integration", "Moisture Control", "Seasonal Adjustments"],
        color: "text-teal-500",
        bg: "from-teal-500/10 to-transparent"
      },
      {
        id: 2,
        title: "Gas Upgrading Integration",
        description: "Integration of membrance, PSA, and other upgrading systems to transform waste liability into profitable revenue streams.",
        icon: Fi.FiRefreshCcw,
        image: "https://images.unsplash.com/photo-1581242163695-19d0accd4891?auto=format&fit=crop&w=800&q=80",
        features: ["Membrane Systems", "PSA Integration", "VOC Control", "Siloxane Removal"],
        color: "text-blue-400",
        bg: "from-blue-400/10 to-transparent"
      }
    ]
  },
  skids: {
    title: "Skid-Mounted Processes",
    subtitle: "Factory-Built Modular Solutions",
    description: "We design and fabricate modular skids for gas treatment, compression, and polishing — pre-tested before shipment for faster project execution.",
    items: [
      {
        id: 1,
        title: "Gas Pretreatment",
        description: "Gas pretreatment, moisture control, H2S removal, and carbon polishing skids built for reliability.",
        icon: Fi.FiFilter,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
        features: ["Moisture Removal", "H2S Scavenging", "Carbon Polishing", "Particulate Filtration"],
        color: "text-indigo-500",
        bg: "from-indigo-500/10 to-transparent"
      },
      {
        id: 2,
        title: "Compression & Interconnects",
        description: "Compression, dehydration, CO2 management, and pipeline interconnects (odorization, metering).",
        icon: Fi.FiActivity,
        image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=800&q=80",
        features: ["Gas Compression", "Dehydration Units", "Odorization", "Custody Transfer Metering"],
        color: "text-pink-500",
        bg: "from-pink-500/10 to-transparent"
      }
    ]
  },
  om: {
    title: "Operations & Maintenance",
    subtitle: "Long-Term Reliability",
    description: "We help clients achieve long-term reliability (97% average uptime) by providing full range O&M services and remote support by BGE staff.",
    items: [
      {
        id: 1,
        title: "O&M Services",
        description: "Full O&M services by BGE staff, preventive maintenance plans, and spare parts packages.",
        icon: Fi.FiSettings,
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80",
        features: ["24/7 Support", "Staffing", "Preventive Maintenance", "Spare Parts Management"],
        color: "text-emerald-500",
        bg: "from-emerald-500/10 to-transparent"
      },
      {
        id: 2,
        title: "Optimization & Audits",
        description: "Controls tuning, optimization, routine performance audits, and upgrade recommendations.",
        icon: Fi.FiTrendingUp,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        features: ["Process Tuning", "Performance Audits", "Remote Monitoring", "Upgrade Planning"],
        color: "text-cyan-600",
        bg: "from-cyan-600/10 to-transparent"
      }
    ]
  }
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  return (
    <div className="bg-white min-h-screen text-gray-900 -mt-16">
      <div className="h-16 lg:hidden bg-black"></div>

      {/* Hero Header Section */}
      <div className="relative h-[70vh] md:h-[70vh] flex flex-col justify-end pb-8 md:pb-12 overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
          alt="Services Header"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-500 font-bold uppercase tracking-[0.3em] mb-4 text-xs font-helvetica-light shadow-black drop-shadow-md"
          >
            Comprehensive Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white font-lato-thin uppercase tracking-tight mb-8 md:mb-12 drop-shadow-lg"
          >
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-500 font-extrabold">Services</span>
          </motion.h1>

          {/* Tabs Integrated in Header */}
          <div className="flex flex-wrap gap-4">
            {Object.keys(servicesData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border backdrop-blur-md ${activeTab === key
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40"
                  }`}
              >
                {servicesData[key].title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 lg:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl text-gray-800 font-helvetica-light font-light leading-relaxed"
          >
            <span className="block text-sm font-bold uppercase tracking-widest text-green-600 mb-4">{servicesData[activeTab].subtitle}</span>
            {servicesData[activeTab].description}
          </motion.p>
        </div>
      </div>

      {/* Services Scroll */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-32"
          >
            {servicesData[activeTab].items.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={service.id}
                  className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Service Visual */}
                  <div className={`w-full md:w-1/2 h-80 md:h-[32rem] rounded-[3rem] overflow-hidden relative group border border-gray-100 shadow-2xl`}>
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-75`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full blur-xl"></div>
                        {IconComponent && (
                          <IconComponent className={`relative z-10 text-8xl text-white drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform duration-500`} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">0{service.id}</span>
                      <div className="h-px w-12 bg-gray-300"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-lato-thin uppercase tracking-tight text-gray-900 leading-none">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 font-helvetica-light leading-relaxed font-light">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-900 font-bold text-xs uppercase tracking-widest group">
                          <span className={`w-2 h-2 rounded-full ${service.color.replace('text', 'bg')} group-hover:scale-150 transition-transform`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="flex items-center gap-3 text-black border-b border-black pb-1 hover:gap-6 transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                      Learn More <Fi.FiArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600 rounded-full blur-[200px] opacity-20 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 font-lato-thin uppercase tracking-tighter">
            Start Your <span className="text-green-500">Project</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-helvetica-light max-w-2xl mx-auto">
            Ready to optimize your operations? Contact us to discuss your specific needs.
          </p>
          <a href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
