import React from "react";
import Badges from "./Badges";

const NameBadges = ({ dataA4 }) => {
  const dataCol1 = dataA4.slice(0, 3);
  const dataCol2 = dataA4.slice(3, 6);

  const returnCol1 = dataCol1.map((element, index) => (
    <Badges data={element} />
  ));
  const returnCol2 = dataCol2.map((element, index) => (
    <Badges data={element} />
  ));

  return (
    <div
      className="bg-contain h-[297mm] w-[210mm]"
      style={{
        backgroundImage: `url("/public/bg.jpg")`,
      }}
    >
      <div className="flex">
        <div className="flex flex-col space-y-[130px] w-1/2">{returnCol1}</div>
        <div className="flex flex-col space-y-[130px] w-1/2">{returnCol2}</div>
      </div>
    </div>
  );
};

export default NameBadges;
