import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handleFile from "../feature/HandleFile";
import processImg from "../feature/Process";
import { useReactToPrint } from "react-to-print";

const UploadButton = () => {
  // 1. state for store uploaded data from file
  const [data, setData] = useState([]);

  // 2. state to store the name of the uploaded file
  const [fileName, setFileName] = useState("Empty");

  // 3. state for store generated name badge components for preview
  const [nameBadgesComponents, setNameBadgesComponents] = useState(null);

  // 4. reference for printing content
  const contentRef = useRef(null);
  // 5. setting up react-to-print for print func with contentRef
  const reactToPrintFn = useReactToPrint({ contentRef });

  //log data updates
  useEffect(() => {
    console.log(data);
  }, [data]);

  //6. Feature: call setNameBadgesComponents to update list NameBadges items
  //Input: none
  //Process: call setNameBadgesComponents with parameter is processImg func to get list NameBadges items
  //Output: NameBadgesComponents be updated(list NameBadges items)
  const handlePreview = () => {
    setNameBadgesComponents(processImg(data));
  };

  //7. Return Update Button / Process Button / Print Button
  return (
    <div className="w-1/2 pt-9">
      {/* Update Button  */}
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              XLSX or XLS
            </p>
          </div>
          <input
            onChange={(e) => handleFile(e, setData, setFileName)}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
          {/* Show Toast  */}
          <ToastContainer />
        </label>
      </div>
      {/* show file name  */}
      <div className="pt-2">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold text-center">
          {fileName}
        </p>
      </div>
      {/* Preview button  */}
      <div className="flex justify-center pt-5">
        <button
          onClick={handlePreview}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Preview
        </button>
        {/* Print Button  */}
        <button
          onClick={reactToPrintFn}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Print
        </button>
      </div>
      {/* show list badges  */}
      <div ref={contentRef}>{nameBadgesComponents}</div>
    </div>
  );
};

export default UploadButton;
