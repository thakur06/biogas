import { Card } from '../components/Card'
import { FiZap, FiActivity, FiShield, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi'
import { Hero } from '../components/Hero';
import { Details } from '../components/Details';
import { Clients } from '../components/Clients';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const features = [
    {
      Icon: FiZap,
      title: "Faster Time to Market",
      description: "Our streamlined engineering processes and modular designs accelerate project timelines, ensuring your biogas plant is operational and generating revenue sooner."
    },
    {
      Icon: FiActivity,
      title: "Optimized Performance",
      description: "Advanced monitoring and expert tuning maximize methane yield and system uptime, delivering peak efficiency and superior return on investment."
    },
    {
      Icon: FiShield,
      title: "Risk Mitigation",
      description: "Rigorous safety standards and proven technical expertise minimize operational risks, protecting your assets and ensuring long-term project stability."
    }
  ];

  const stats = [
    { icon: FiTrendingUp, value: "500+", label: "Projects Completed" },
    { icon: FiUsers, value: "200+", label: "Happy Clients" },
    { icon: FiAward, value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-full bg-black -mt-16">
      <div className="h-16 lg:hidden bg-black"></div>

      <Hero />

      <div className="max-w-full mx-auto bg-white">
        <Details />

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight font-lato-thin">
                ENGINEERING <span className="text-green-600">EXCELLENCE</span>
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto font-helvetica-light font-semibold opacity-70">
                Providing industry-leading solutions that drive value and sustainability across every project stage.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  Icon={feature.Icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <Clients />

      </div>
      <div className='flex md:flex-row md:justify-between py-12 md:py-24 px-4 sm:px-6 lg:px-36 items-center flex-col bg-black w-full min-h-64 gap-6'>
        <div>
          <h1 className='text-2xl md:text-5xl text-white text-center font-bold font-lato-thin' >
            Have a Project for Us?
          </h1>
          <h2 className='text-lg md:text-2xl text-white font-medium mt-4 font-helvetica-light opacity-80'>
            Let’s turn your waste into clean, <span className='font-extrabold text-green-600'>renewable</span> energy.
          </h2>
        </div>

        <div>
          <Link to="/contact">
            <button className='bg-white text-black px-14 py-3 text-xs hover:bg-transparent hover:border hover:border-white hover:ease-in-out text-center font-bold hover:text-white transition-all tracking-widest uppercase'>
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

