import classNames from "classnames";
import React from "react";

const Square = ({ value, onClick, turn }) => {
  const handleClick = () => {
    turn !== null && value === null && onClick();
  };

  let classSquare = classNames({
    square: true,
    [`square__${value}`]: value !== null,
  });

  return <div className={classSquare} onClick={() => handleClick()}></div>;
};

export default Square;
