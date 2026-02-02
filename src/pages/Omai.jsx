import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { Card } from '../components/Card';
import { FiActivity, FiCpu, FiShield, FiZap, FiBarChart2, FiMonitor } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Lazy load Globe component
const Globe = lazy(() => import('react-globe.gl'));

export const Omai = () => {
  const globeEl = useRef();

  // Generate random arcs connecting global locations
  const [arcsData, setArcsData] = useState([]);
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    // Sample locations for biogas plants around the world
    const locations = [
      { lat: 37.7749, lng: -122.4194, name: 'San Francisco', size: 0.8 },
      { lat: 51.5074, lng: -0.1278, name: 'London', size: 1.0 },
      { lat: 28.6139, lng: 77.2090, name: 'New Delhi', size: 0.9 },
      { lat: 35.6762, lng: 139.6503, name: 'Tokyo', size: 0.85 },
      { lat: -33.8688, lng: 151.2093, name: 'Sydney', size: 0.7 },
      { lat: 52.5200, lng: 13.4050, name: 'Berlin', size: 0.75 },
      { lat: 40.7128, lng: -74.0060, name: 'New York', size: 0.95 },
      { lat: 1.3521, lng: 103.8198, name: 'Singapore', size: 0.8 },
      { lat: 55.7558, lng: 37.6173, name: 'Moscow', size: 0.7 },
      { lat: -23.5505, lng: -46.6333, name: 'São Paulo', size: 0.75 },
    ];

    // Set points data
    setPointsData(locations.map(loc => ({
      lat: loc.lat,
      lng: loc.lng,
      size: loc.size,
      color: 'rgba(6, 182, 212, 1)',
      label: loc.name
    })));

    // Create arcs between random locations
    const arcs = [];
    for (let i = 0; i < 8; i++) {
      const start = locations[Math.floor(Math.random() * locations.length)];
      const end = locations[Math.floor(Math.random() * locations.length)];
      if (start !== end) {
        arcs.push({
          startLat: start.lat,
          startLng: start.lng,
          endLat: end.lat,
          endLng: end.lng,
          color: [
            'rgba(6, 182, 212, 0.6)',
            'rgba(59, 130, 246, 0.6)',
            'rgba(168, 85, 247, 0.5)'
          ][Math.floor(Math.random() * 3)]
        });
      }
    }
    setArcsData(arcs);
  }, []);
  const metrics = [
    {
      Icon: FiZap,
      title: "Methane Yield",
      description: "AI-optimized biological processes resulting in 15-20% higher methane concentration."
    },
    {
      Icon: FiActivity,
      title: "System Health",
      description: "Real-time monitoring of digestor temperature, pH levels, and pressure gradients."
    },
    {
      Icon: FiMonitor,
      title: "Predictive Maintenance",
      description: "Advanced algorithms identify potential equipment failures before they occur."
    }
  ];

  const features = [
    { title: "Autonomous Optimization", desc: "Machine learning loops that adjust feedstock ratios for maximum efficiency." },
    { title: "Global Fleet Management", desc: "Monitor all your plant locations from a single, unified AI dashboard." },
    { title: "Anomaly Detection", desc: "Instant alerts for irregular gas patterns or biological imbalances." },
    { title: "Remote Support", desc: "Direct integration with our team of engineers for rapid intervention." }
  ];

  return (
    <div className="galactic-bg -mt-16 text-white min-h-screen">
      <div className="h-16 bg-black/20 backdrop-blur-md"></div>

      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          // style={{ backgroundImage: "url('/OMai.jpg')" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Reduced Overlay - More Dominant Image */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Strategic Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0"></div>

        {/* Floating Nebula Effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="max-w-4xl">
              {/* OMAI Logo */}

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-cyan-400 font-bold uppercase tracking-[0.4em] mb-4 text-xs font-helvetica-light glow-blue"
              >
                Interstellar Bio-Intelligence
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter font-lato-thin uppercase leading-none drop-shadow-2xl"
              >
                Meet <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600 glow-blue">OMAI</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-blue-50 font-helvetica-light font-light mb-10 leading-relaxed max-w-2xl drop-shadow-lg"
              >
                The world's most advanced AI-driven plant health monitor, powered by deep-space neural architectures.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 md:gap-6"
              >
                <button className="bg-blue-600 text-white px-10 md:px-12 py-4 md:py-6 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-cyan-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:scale-105">
                  Initiate Demo
                </button>
                <a
                  href="https://omai.biogaseng.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-10 md:px-12 py-4 md:py-6 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] transform hover:scale-105"
                >
                  Visit OMAI
                </a>
              </motion.div>
            </div>

            {/* Right Side - 3D Globe */}
            <div className="hidden lg:flex items-center justify-center relative h-[700px]">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-cyan-400 text-lg animate-pulse">Loading Globe...</div>
                </div>
              }>
                <Globe
                  ref={globeEl}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  backgroundColor="rgba(0,0,0,0)"
                  width={700}
                  height={700}

                  // Atmosphere
                  atmosphereColor="#00d4ff"
                  atmosphereAltitude={0.25}

                  // Remove grid lines
                  showGraticules={false}

                  // Arcs - Animated connections
                  arcsData={arcsData}
                  arcColor="color"
                  arcDashLength={0.6}
                  arcDashGap={0.3}
                  arcDashAnimateTime={2000}
                  arcStroke={0.8}
                  arcAltitude={0.3}
                  arcsTransitionDuration={0}

                  // Points - Glowing locations
                  pointsData={pointsData}
                  pointColor="color"
                  pointAltitude={0.01}
                  pointRadius={0.15}
                  pointResolution={12}

                  // Labels
                  labelsData={pointsData}
                  labelLat={d => d.lat}
                  labelLng={d => d.lng}
                  labelText={d => d.label}
                  labelSize={0.8}
                  labelDotRadius={0.3}
                  labelColor={() => 'rgba(6, 182, 212, 0.9)'}
                  labelResolution={2}

                  // Rings - Pulsing effect
                  ringsData={pointsData}
                  ringColor={() => 'rgba(6, 182, 212, 0.4)'}
                  ringMaxRadius={2}
                  ringPropagationSpeed={2}
                  ringRepeatPeriod={1500}

                  // Interaction - Rotation only, no zoom
                  enablePointerInteraction={true}
                  onGlobeReady={(globe) => {
                    // Disable zoom controls
                    globe.controls().enableZoom = false;
                    globe.controls().minDistance = 200;
                    globe.controls().maxDistance = 200;
                  }}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent">
        {/* Metrics Section */}
        <section className="py-24 relative">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-lato-thin uppercase tracking-widest text-blue-400 glow-blue">Galactic Performance</h2>
              <p className="text-blue-100/60 max-w-2xl mx-auto text-base font-helvetica-light font-semibold uppercase tracking-widest">
                Real-time processing across the bio-digital frontier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="glass-card p-10 rounded-[3rem] hover:border-blue-500/50 transition-all duration-700 group">
                  <metric.Icon className="text-4xl text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-bold mb-4 font-lato-thin uppercase tracking-widest group-hover:text-blue-400 transition-colors">{metric.title}</h3>
                  <p className="text-sm text-gray-400 font-helvetica-light leading-relaxed opacity-80">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full py-12 md:py-20 bg-black relative z-50">
          <div className="w-full p-2">
            <video
              controls
              className="w-full"
              autoPlay
              muted
              loop
              controlsList="nodownload"
              preload="metadata"
            >
              <source src="/OMAI_V2.mov" type="video/mp4" />
              <source src="/OMAI_V2.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Features Detail */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 font-lato-thin uppercase leading-tight text-blue-400">Deep Space Monitoring</h2>
                <p className="text-lg text-blue-100/60 mb-12 font-helvetica-light leading-relaxed">
                  Engineered for the most demanding biological ecosystems on Earth. OMAI maintains peak health through advanced cosmic pattern recognition.
                </p>
                <div className="space-y-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-all">
                        <FiShield className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 font-lato-thin text-xl uppercase tracking-widest">{f.title}</h4>
                        <p className="text-gray-400 text-sm font-helvetica-light opacity-80 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-[4rem] p-16 border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent">
                <FiCpu className="text-6xl text-blue-400 mb-8 animate-pulse shadow-blue-400/50" />
                <h3 className="text-3xl font-bold mb-6 font-lato-thin uppercase tracking-widest">Neural Warp Engine</h3>
                <p className="text-blue-100/60 leading-relaxed font-helvetica-light text-lg mb-12">
                  15 years of operational data compressed into a singular atomic intelligence.
                </p>
                <div className="p-8 glass-card rounded-3xl border-white/5">
                  <div className="flex justify-between items-center mb-6">
                    <p className="font-bold text-xs text-blue-400 uppercase tracking-widest">Logic Consistency</p>
                    <p className="text-blue-400 font-bold text-lg">99.8%</p>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-green-500 h-full w-[99.8%] shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[180px] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-semibold mb-10 font-lato-thin uppercase tracking-tighter">Enter the Future</h2>
            <p className="text-xl text-blue-100/60 mb-14 font-helvetica-light uppercase tracking-[0.3em] max-w-2xl mx-auto">
              Command your plant with galactic precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="bg-blue-600 text-white px-14 py-5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                Request Uplink
              </button>
              <button className="border border-white/20 text-white px-14 py-5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                Case Archives
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
