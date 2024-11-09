import React from "react";

const Badge = ({ data }) => {
  return (
    <div className="w-full">
      <p className="font-bold text-3xl text-cyan-900 block text-center">
        {data["Last Name"] + " " + data["First Name"]}
      </p>
      <br />
      <p className="text-2xl block text-center">{data["Job Title"]}</p>
      <p className="text-2xl block text-center">{data.Company}</p>
    </div>
  );
};

export default Badge;
