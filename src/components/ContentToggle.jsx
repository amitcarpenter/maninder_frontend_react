import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
const ContentToggle = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const qaArray = [
    {
      id: 1,
      question:
        "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "Registering the Agreement for Sale is essential to ensure legal validity and protection of your property rights. It provides a legal record of the transaction and helps prevent disputes or challenges in the future. Additionally, it enables the transfer of ownership and facilitates smooth property transactions.",
    },
    {
      id: 2,
      question: "What factors should I consider when buying a property?",
      answer:
        "When buying a property, it's crucial to consider factors such as location, budget, amenities, legal documentation, property condition, and potential for appreciation. Conduct thorough research, consult with professionals, and carefully evaluate your needs and preferences to make an informed decision.",
    },
    {
      id: 3,
      question: "How can I determine the market value of my property?",
      answer:
        "Several factors influence the market value of a property, including location, size, condition, amenities, recent sales of similar properties in the area, and prevailing market conditions. Consulting with real estate professionals, conducting comparative market analysis, and considering appraisals can help you determine the fair market value of your property.",
    },
    {
      id: 4,
      question: "What is the role of a real estate agent?",
      answer:
        "A real estate agent serves as a knowledgeable guide and facilitator throughout the buying, selling, or renting process. They provide valuable insights, assist with property searches, market analysis, negotiations, paperwork, and ensure a smooth transaction from start to finish. Their expertise and network can help you navigate the complexities of the real estate market and achieve your goals.",
    },
    // Add more question-answer pairs here as needed
  ];

  const toggleQuestion = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    <>
      {qaArray.map((item) => (
        <div key={item.id} className="bg-white shadow-lg rounded p-5 mb-3">
          <button
            className="flex justify-between items-center"
            onClick={() => toggleQuestion(item.id)}
          >
            <h1 className="text-xl font-[400] text-[#C5B351]">
              {item.question}
            </h1>
            <span>
              {selectedQuestion === item.id ? (
                <MdKeyboardArrowUp className="w-7 h-7" />
              ) : (
                <MdKeyboardArrowDown className="w-7 h-7" />
              )}
            </span>
          </button>
          {selectedQuestion === item.id && (
            <div className="px-2">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ContentToggle;
