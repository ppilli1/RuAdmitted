"use client"
import { useState } from "react";
import ExampleTester from "@/components/ExampleTester";
import { Metadata } from "next";

interface ExampleTesterPageProps {
  // Add any props if needed
}

const LeftHalf = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-1/2 border-r border-black p-4">
      <select
        className="w-full h-10 border border-gray-300 p-2 mb-2"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="">Select an option</option>
        <option value="Computer Science">Computer Science</option>
      </select>
    </div>
  );
};

const ExampleTesterPage: React.FC<ExampleTesterPageProps> = () => {
  return (
    <div className="flex h-screen">
      {/* Left half */}
      <LeftHalf />

      {/* Right half */}
      <div className="w-1/2"></div>
    </div>
  );
};

export default ExampleTesterPage;
