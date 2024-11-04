import NameBadges from "../components/NameBadges";
import React from "react";
const processImg = (data) => {
  let index = 0;
  const badgesComponents = [];

  for (let i = 0; i < Math.ceil(data.length / 6); i++) {
    const tmpArr = [];
    for (let j = 0; j < 6 && index < data.length; j++) {
      tmpArr.push(data[index]);
      index++;
    }
    badgesComponents.push(<NameBadges dataA4={tmpArr} />);
  }

  return badgesComponents;
};

export default processImg;
