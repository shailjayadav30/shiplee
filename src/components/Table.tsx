import { FaShippingFast, FaChartLine, FaCashRegister, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';

const FranchiseBenefitsTable = () => {
  const benefits = [
    {
      icon: <FaShippingFast />,
      title: "Core Logistics Features",
      details: [
        "Automated Shipment Tracking: Provides real-time tracking and notifications.",
        "Live Rate Calculator: Allows users to view shipping rates dynamically.",
        "Multiple Pickup Addresses: Offers flexibility with pickups from multiple locations."
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Advanced Logistics Tools",
      details: [
        "RTO Management & Prediction: AI-driven tools to help reduce RTO rates.",
        "NDR Automation: Simplifies non-delivery response handling."
      ]
    },
    {
      icon: <FaCashRegister />,
      title: "Financial Flexibility",
      details: [
        "Postpaid Options: Offers COD remittances as credits.",
        "Instant Financing: Provides quick financing options for expansion."
      ]
    },
    {
      icon: <FaHandsHelping />,
      title: "Customer Engagement & Retention",
      details: [
        "Branded Tracking Page: Enhances brand visibility.",
        "NDR Call Center: One-on-one support for non-delivery cases.",
        "Social Ordering: Streamlined order placements through social channels."
      ]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Integration & Data Management",
      details: [
        "CRM & ERP Synchronization: Seamless data flow integration.",
        "Advanced Reporting: Analyzes shipment data for decisions."
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-8">Franchise Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-3xl text-blue-500 mr-3">{benefit.icon}</span>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {benefit.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchiseBenefitsTable;
