import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const onOpenDropDown = (e) => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="question" onClick={() => onOpenDropDown()}>
      <h4>{question}</h4>
      {openDropDown && (
        <div className="question">
          <p>{answer}</p>
        </div>
      )}
      <div className="underline"></div>
    </div>
  );
};

export default Question;
