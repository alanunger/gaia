/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Line1 = ({ color = "#07372D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`line-1 ${className}`}
      fill="none"
      height="140"
      viewBox="0 0 2 140"
      width="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M-1.2e-05 0.00014H1.99999V140H-1.2e-05V0.00014Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Line1.propTypes = {
  color: PropTypes.string,
};
