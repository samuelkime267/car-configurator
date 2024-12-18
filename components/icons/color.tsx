import React from "react";

export default function Color(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.70699 3.21869L2.63599 10.2897C2.26105 10.6647 2.05042 11.1734 2.05042 11.7037C2.05042 12.234 2.26105 12.7426 2.63599 13.1177L8.29199 18.7747C8.47773 18.9606 8.69831 19.1082 8.94111 19.2088C9.1839 19.3095 9.44416 19.3613 9.70699 19.3613C9.96982 19.3613 10.2301 19.3095 10.4729 19.2088C10.7157 19.1082 10.9362 18.9606 11.122 18.7747L18.192 11.7037L9.70699 3.21869ZM9.70699 3.21869L8.29299 1.80469"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15C20 15 23 17.993 23 19.887C23 21.542 21.655 22.887 20 22.887C18.345 22.887 17.012 21.542 17 19.887C17.01 17.992 20 15 20 15Z"
        stroke="currentColor"
        strokeMiterlimit="1.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
