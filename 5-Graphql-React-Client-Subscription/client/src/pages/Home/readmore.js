import React, { useState } from "react";
import Styles from "./styles.module.css";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={Styles.text}>
      {isReadMore ? text.slice(0, 70) : text}
      <span onClick={toggleReadMore} className={Styles.readorhide}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;