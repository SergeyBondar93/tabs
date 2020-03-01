import React from "react";
import ArrowLeft from "mdi-react/ArrowLeftBoxIcon";
import ArrowRight from "mdi-react/ArrowRightBoxIcon";

export const ScrollButton = ({ left, onClick }) => {
  if (left) {
    return (
      <div onClick={() => onClick("left")} className="scroll-button">
        <ArrowLeft></ArrowLeft>
      </div>
    );
  } else {
    return (
      <div onClick={() => onClick("right")} className="scroll-button">
        <ArrowRight></ArrowRight>
      </div>
    );
  }
};
