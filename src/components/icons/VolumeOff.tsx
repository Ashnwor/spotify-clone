import * as React from 'react';

function SvgVolumeOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M13.5 9A4.5 4.5 0 0011 4.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zM16 9c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0018 9c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM1.27 0L0 1.27 4.73 6H0v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L16.73 18 18 16.73l-9-9L1.27 0zM9 1L6.91 3.09 9 5.18V1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVolumeOff;