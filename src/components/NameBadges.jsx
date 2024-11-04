import React from "react";
import Badges from "./Badge";

const NameBadges = ({ dataOneBadge }) => {
  // 1. split the badge data into two columns
  const dataCol1 = dataOneBadge.slice(0, 3); // First 3 badges
  const dataCol2 = dataOneBadge.slice(3, 6); // Next 3 badges

  // 2. mapping each element in dataCol1 and dataCol2 to <Badges /> components
  const returnCol1 = dataCol1.map((element) => <Badge data={element} />);
  const returnCol2 = dataCol2.map((element) => <Badge data={element} />);

  return (
    <div
      // 3. setting the background image
      className="bg-contain h-[297mm] w-[210mm]"
      style={{
        backgroundImage: `url("https://i.postimg.cc/59b3QTyy/image.png")`, // URL of the background image
      }}
    >
      {/* 4. rendering two column */}
      <div className="flex">
        {/* 4.1 left column with spacing for badges */}
        <div className="flex flex-col space-y-[130px] w-1/2">{returnCol1}</div>
        {/* 4.2 right column with spacing for badges */}
        <div className="flex flex-col space-y-[130px] w-1/2">{returnCol2}</div>
      </div>
    </div>
  );
};

export default NameBadges;
