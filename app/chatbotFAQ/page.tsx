// Import necessary modules from React and Next.js
"use client";
import React, { useState } from 'react';

// Create a functional component for the FAQ page
const FAQPage: React.FC = () => {
  // Define the list of FAQ items with questions and answers
  const faqItems = [
    {
      question: 'When will I register for courses?',
      answer:
        'In your first semester, advisors will register you for your courses based on your course requests...',
    },
    {
      question: 'Can you double major across two different RU schools?',
      answer:
        'Students can double major across different schools within Rutgers-New Brunswick, depending on the program...',
    },
    {
      question: 'What kind of research do undergraduate students do?',
      answer:
        'The Aresty Research Center provides support for undergraduate research. The Center assists students in finding opportunities...',
    },
    {
      question:
        'I was admitted to SAS but would like to transfer to another school within Rutgers. What would be the process?',
      answer:
        'For students to apply for a school-to-school transfer, students need to complete prerequisite courses and meet the admissions criteria...',
    },
    // Add more FAQ items as needed
  ];

  // Create state variables to manage the active FAQ item
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to handle the click on a FAQ item
  const handleItemClick = (index: number) => {
    // Toggle the activeIndex to show/hide the answer dropdown
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Function to render the FAQ items
  const renderFAQItems = () => {
    return faqItems.map((item, index) => (
      <div key={index} className="mb-4">
        {/* FAQ Question Button */}
        <button
          className="w-full bg-gray-300 py-2 px-4 text-left font-semibold"
          onClick={() => handleItemClick(index)}
        >
          {item.question}
        </button>

        {/* FAQ Answer Dropdown */}
        {activeIndex === index && (
          <div className="bg-gray-200 p-4">
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="flex">
      {/* Left half (empty) */}
      <div className="w-1/2"></div>

      {/* Right half (FAQ section) */}
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

        {/* Render FAQ items */}
        {renderFAQItems()}
      </div>
    </div>
  );
};

export default FAQPage;
