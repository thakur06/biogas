import React,{useState} from 'react'

export const Services = () => {
  const data = [
    {
      id: 1,
      title: "Biogas Plant Installation",
      image:
        "https://w7.pngwing.com/pngs/851/342/png-transparent-two-men-illustration-mechanical-engineering-computer-icons-engineering-drawing-industrail-workers-and-engineers-text-people-public-relations-thumbnail.png",
      works: ["Design", "Fabrication", "Installation", "Testing", "Maintenance"],
    },
    {
      id: 2,
      title: "Waste-to-Energy Solutions",
      image:
        "https://cdn-icons-png.flaticon.com/512/3022/3022385.png",
      works: ["Feedstock Analysis", "Plant Optimization", "Automation", "Monitoring"],
    },
    {
      id: 3,
      title: "Gas Upgradation Systems",
      image:
        "https://cdn-icons-png.flaticon.com/512/3203/3203071.png",
      works: ["H₂S Removal", "CO₂ Scrubbing", "Compression", "Storage", "Pipeline Integration"],
    },
    {
      id: 4,
      title: "Consultancy & Turnkey Projects",
      image:
        "https://cdn-icons-png.flaticon.com/512/3039/3039413.png",
      works: ["Feasibility Studies", "Cost Estimation", "Licensing Support", "Project Execution"],
    },
  ];

  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  return (
    <div className="bg-black -mt-16 text-black">
      <div className="h-16 bg-black"></div>
    <div className="min-h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-4">
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 font-helvetica-light">
        Our Works & Expertise
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => {
          const isExpanded = expandedCards.includes(item.id);
          const visibleWorks = isExpanded ? item.works : item.works.slice(0, 2);

          return (
            <div
              key={item.id}
              className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>

              {/* Works List */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700 text-sm w-full text-center">
                {visibleWorks.map((work, index) => (
                  <li key={index}>• {work}</li>
                ))}
              </ul>

              {/* Expand / Collapse Button */}
              {item.works.length > 2 && (
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {isExpanded ? "Show Less ▲" : "View All ▼"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
    <div className="text-center bg-gradient-to-r from-green-100 to-white py-8 px-4 rounded-lg shadow-sm">
  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
    Driven by decades of engineering excellence and a legacy of proven performance.
  </h3>
</div>

    </div>
    </div>
  )
}

