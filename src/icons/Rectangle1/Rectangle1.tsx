/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Rectangle1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`rectangle-1 ${className}`}
      fill="none"
      height="141"
      viewBox="0 0 447 141"
      width="447"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.99996 0H439C443.418 0 447 3.58168 447 8.00006V133C447 137.418 443.418 141 439 141H7.99996C3.58181 141 0 137.418 0 133V8.00006C0 3.58168 3.58181 0 7.99996 0Z"
        fill="#09493C"
        fillRule="evenodd"
      />
    </svg>
  );
};
