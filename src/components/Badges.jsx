import React from "react";

const Badges = ({ data }) => {
  return (
    <div className="w-full mt-[130px] pt-[30px] ">
      <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
        {data["Last Name"] + " " + data["First Name"]}
      </p>
      <p className="text-2xl block text-center">{data["Job Title"]}</p>
      <p className="text-2xl block text-center">{data["Company"]}</p>
    </div>
  );
};

export default Badges;
