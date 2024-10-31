import React from "react";
import UploadButton from "./UploadButton";

export const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full">
        <UploadButton />
      </div>
      <div id="file_name"></div>
    </div>
  );
};
