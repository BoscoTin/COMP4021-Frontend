import React from "react";

export default function (props) {
  const { classname } = props;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 434 358"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.2894 41.7354C48.3267 17.6466 69.1768 6.10352e-05 93.6017 6.10352e-05H383.284C410.898 6.10352e-05 433.284 22.3858 433.284 50.0001V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z"
        className={classname}
      />
    </svg>
  );
}
