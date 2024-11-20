import React from "react";
import Badge from "./Badge";
// import "./NameBadge.css";
const NameBadges = ({ dataOneBadge }) => {
  // 1. split the badge data into two columns
  const dataRow1 = dataOneBadge.slice(0, 2); // First 2 badges
  const dataRow2 = dataOneBadge.slice(2, 4); // Next 2 badges
  const dataRow3 = dataOneBadge.slice(4, 6); // Next 2 badges

  if (dataRow1.length == 1) {
    dataRow1.push({
      "First Name": "",
      "Last Name": "",
      "Job Title": "",
      Company: "",
    });
  }

  if (dataRow2.length == 1) {
    dataRow2.push({
      "First Name": "",
      "Last Name": "",
      "Job Title": "",
      Company: "",
    });
  }

  if (dataRow3.length == 1) {
    dataRow3.push({
      "First Name": "",
      "Last Name": "",
      "Job Title": "",
      Company: "",
    });
  }

  // 2. mapping each element in dataCol1 and dataCol2 to <Badges /> components
  const returnRow1 = dataRow1.map((element) => <Badge data={element} />);
  const returnRow2 = dataRow2.map((element) => <Badge data={element} />);
  const returnRow3 = dataRow3.map((element) => <Badge data={element} />);

  return (
    <div
      // 3. setting the background image
      className="relative h-[297mm] w-[210mm]"
    >
      <img
        src="https://i.postimg.cc/59b3QTyy/image.png"
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-contain z-0"
      />
      {/* 4. rendering 3 row */}
      <div className="flex flex-col h-full relative">
        {/* 4.1 row 1 with spacing for badges */}
        <div className="flex w-full absolute top-[210px]">{returnRow1}</div>
        {/* 4.2 row 2 with spacing for badges */}
        <div className="flex w-full absolute top-[500px]">{returnRow2}</div>
        {/* 4.3 row 3 with spacing for badges */}
        <div className="flex w-full absolute top-[770px]">{returnRow3}</div>
      </div>
    </div>
  );
};

export default NameBadges;
