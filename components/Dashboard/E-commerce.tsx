// ECommerce.tsx
"use client"
import React, { useState } from "react";
import { AreaChart, SimpleBar } from "@/components/Charts";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import dynamic from "next/dynamic";
import DataCard from "../Cards/DataCard";
import SimpleBar2 from "../Charts/bar/SimpleBar2";
import SimpleBar3 from "../Charts/bar/SimpleBar3";
import MapOne from "../Maps/MapOne";
import TableTwo from "../Tables/TableTwo";
import TableThree from "../Tables/TableThree";
import TableFour from "../Tables/TableFour";
import Link from "next/link";

const ECommerce: React.FC = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [lol, lolSetlol] = useState<string>()
  const handleTextBoxClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    setShowTextBox(!showTextBox);
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("api-key", "8100599adae04020964e7c0025843ae4");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "dataSources": [
        {
          "type": "AzureCognitiveSearch",
          "parameters": {
            "endpoint": "https://cogsearchruadmit.search.windows.net",
            "indexName": "appkitruadmitindex",
            "semanticConfiguration": "default",
            "queryType": "vector",
            "fieldsMapping": {},
            "inScope": true,
            "roleInformation": "You are an AI assistant that helps people find information from the files provided to you and you will give a short answer around 2 sentences.",
            "filter": null,
            "strictness": 3,
            "topNDocuments": 5,
            "key": "vAwq7ZRtGSaJbScSog113iuKbDDKR6m7HRW5ggOjWIAzSeDxx0aD",
            "embeddingDeploymentName": "embedruadmit"
          }
        }
      ],
      "messages": [
        {
          "role": "system",
          "content": "You are an AI assistant that helps people find information from the files provided to you and you will give a short answer around 2 sentences."
        },
        {
          "role": "user",
          "content": "This student "
        }
      ],
      "deployment": "openairuadmit",
      "temperature": 0,
      "top_p": 1,
      "max_tokens": 800,
      "stop": null,
      "stream": false
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch('https://hoyatest1ruadmit.openai.azure.com/openai/deployments/openairuadmit/extensions/chat/completions?api-version=2023-07-01-preview', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
    .then(response => response.json()) 
    .then((data) => {
        lolSetlol(data.choices[0].messages[1].content)
        
      });
  };

  return (
    <>
      <div className="bg-red-500 rounded-lg text font-bold p-4 inline-block">
        My Rutgers Admissions Dashboard
      </div>

      <div className="space-y-5 py-5">
        <AreaChart />
        <SimpleBar/>
        <div className="flex space-x-4">
          <div className="flex-1">
            <SimpleBar2 />
          </div>
          <div className="flex-1">
            <SimpleBar3 />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/*<MapOne />*/}
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <div className = "col-span-12 xl:col-span-4">
          <TableFour/>
        </div>
        {/*<ChatCard />*/}
      </div>

      <div className="col-span-12 xl:col-span-8 relative mt-4">
        {/* Place the button outside the grid but still under TableOne */}
        <Link
          href="#"
          onClick={handleTextBoxClick}
          className="absolute top-0 left-95 inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10">
          Have An Admissions Officer Rate Your Application
        </Link>

        {showTextBox && (
          <div
            className="absolute top-20 left-0 right-0 bg-white p-4 border border-gray-300 rounded-lg px-10 py-10"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {/* AI Prompt Response Textbox */}
            {/* You can replace this with the actual content from your AI prompt response */}
            {lol}
          </div>
        )}
      </div>

      <div className="mt-10" style={{ minHeight: "20rem" }}>
        {/* Add some additional space at the bottom */}
      </div>
    </>
  );
};

export default ECommerce;
