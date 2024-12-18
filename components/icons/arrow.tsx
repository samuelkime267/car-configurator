import React from "react";

export default function Arrow(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 19.9962V4.11719C11.6025 4.11727 11.2212 4.27517 10.94 4.55619L5.25 10.2462M18.75 10.2462L13.06 4.55619C12.7786 4.27554 12.3974 4.11801 12 4.11819"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
