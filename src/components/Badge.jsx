import React from "react";

const Badge = ({ data }) => {
  let lastname = data["Last Name"].toUpperCase();
  let firstname = data["First Name"].toUpperCase();
  return (
    <div className="w-full">
      <p className="font-bold text-3xl text-cyan-900 block text-center">
        {lastname + " " + firstname}
      </p>
      <br />
      <p className="text-2xl block text-center">{data["Job Title"]}</p>
      <p className="text-2xl block text-center">{data.Company}</p>
    </div>
  );
};

export default Badge;
