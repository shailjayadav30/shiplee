import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: JSX.Element;
}

interface AccordionProps {
  darkMode: boolean; // Add darkMode prop
}

const Accordion: React.FC<AccordionProps> = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "One-Click Checkout",
      answer: (
        <>
          Shiplee's one-click checkout feature streamlines the purchasing
          process by allowing customers to complete their transactions instantly
          without needing to re-enter payment and shipping information,
          enhancing convenience and speed for repeat customers.{" "}
          <a href="https://www.shiplee.ai/" className="text-blue-500 underline">
            Learn More
          </a>
        </>
      ),
    },
    {
      question: "AI-Powered RTO Predictor",
      answer: (
        <>
          Shiplee’s AI Return to Origin (RTO) predictor tool assesses the risk
          of returns, helping to reduce potential losses by identifying orders
          with a higher probability of returning. This feature currently offers
          a high accuracy rate, allowing businesses to improve efficiency and
          reduce operational costs.{" "}
          <a href="https://www.shiplee.ai/" className="text-blue-500 underline">
            Start Now
          </a>
        </>
      ),
    },
    {
      question: "Secure Transactions and Customer Data",
      answer: (
        <>
          With advanced encryption, Shiplee ensures that payment and customer
          data are securely stored and processed. This commitment to security
          builds trust and reliability among users.{" "}
          <a href="https://www.shiplee.ai/" className="text-blue-500 underline">
            shipment tracking
          </a>
          , live rate calculator, multi pickup location, COD reconciliation,
          bulk order processing, etc.
        </>
      ),
    },
    {
      question: "Efficient Pickup Scheduling and Tracking",
      answer: (
        <>
          Users can schedule pickups directly from the Shiplee dashboard, making
          it convenient for businesses to manage logistics seamlessly. Real-time
          shipment tracking is also available, giving customers up-to-date
          information about their orders.{" "}
          <a href="https://www.shiplee.ai/" className="text-blue-500 underline">
            Start Now
          </a>
        </>
      ),
    },
  ];

  return (
    <div className={`contentWrapper z-99 p-4 ${darkMode ? 'bg-[#15072c]' : 'bg-gray-50'} rounded-lg`}>
      <h2 className="headingText text-3xl font-bold mb-4 text-center">
        Why choose
        <span className="pl-2 text-transparent bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text">
          Shiplee
        </span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`schema-faq-section ${
              openIndex === index ? "active" : ""
            } p-4 ${darkMode ? 'bg-[#1e1c2a]' : 'bg-white'} rounded-md shadow-md`}
          >
            <button
              className="schema-faq-question text-lg font-semibold w-full text-left flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className={`schema-faq-answer mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;