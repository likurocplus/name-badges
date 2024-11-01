import React from "react";
import UploadButton from "./UploadButton";
import ProcessButton from "./ProcessButton";
import PrintButton from "./PrintButton";
import NameBadges from "./NameBadges";

export const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col w-full h-full">
        <UploadButton />
        <div className="flex flex-row pt-9">
          <ProcessButton />
          <PrintButton />
        </div>
        <NameBadges />
      </div>
    </div>
  );
};
