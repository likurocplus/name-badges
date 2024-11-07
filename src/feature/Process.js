import NameBadges from "../components/NameBadges";
import React from "react";

// Feature: is func create list badges and return for Upload display
// Input: The function takes in an array data (data from Upload).
// Process: It divides the data array into chunks of 6 elements each, creating a new component (NameBadges) for each chunk.
// Output: return an array of NameBadges components, each contain 6 items from the data array.
const processImg = (data, omitFirstRow, columnMappings) => {
  // 1. initialize index to keep current position in the data array
  let index = 0;

  //1a. check omit first row if true then set index = 1
  if (omitFirstRow === true) {
    index = 1;
  }

  // 2. initialize an empty array to contain NameBadges components
  const badgesComponents = [];

  // 3. loop to create chunks of 6 elements each from the data array
  for (let i = 0; i < Math.ceil(data.length / 6); i++) {
    // 3.1 initialize tmparray to hold each chunk of 6 items
    const tmpArr = [];

    // 3.2 loop to gather 6 items, or until the end of the data array
    for (let j = 0; j < 6 && index < data.length; j++) {
      tmpArr.push({
        "First Name": data[index][columnMappings.firstName],
        "Last Name": data[index][columnMappings.lastName],
        "Job Title": data[index][columnMappings.title],
        "Company Name": data[index][columnMappings.company],
      }); // Add item to tmpArr
      index++; // move to the next item in the data array
    }

    // 3.3 create a NameBadges component and push them on badgesComponents array
    badgesComponents.push(
      <NameBadges dataOneBadge={tmpArr} columnMappings={columnMappings} />
    );
  }

  // 4. return NameBadges components
  return badgesComponents;
};

export default processImg;
