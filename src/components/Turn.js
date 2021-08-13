import React from "react";
import classNames from "classnames";

const Turn = ({ turn }) => {
  let titleClass = classNames({
    turn__title: true,
    [`turn__title--${turn}`]: turn !== null,
  });
  let classSquare = classNames({
    turnspan: true,
    [`square__${turn}`]: turn !== null,
  });

  return (
    <h3 className={titleClass}>
      It's your turn: <span className={classSquare}>xx</span>
    </h3>
  );
};

export default Turn;
