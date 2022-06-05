import * as React from 'react'

const Darkmode = () => (
  <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <path
        d="M20.21 4.675a12.245 12.245 0 0 0-2.12-3.652 14.125 14.125 0 0 1 7.798 5.002c1.905 2.444 3.05 5.49 3.05 8.784 0 3.943-1.575 7.452-4.158 10.034A14.135 14.135 0 0 1 14.746 29a14.133 14.133 0 0 1-8.596-2.9c-2.437-1.9-4.26-4.545-5.085-7.574a11.313 11.313 0 0 0 3.574 1.985l.009.003c1.244.415 2.616.665 4.037.665a12.28 12.28 0 0 0 8.686-3.592 12.28 12.28 0 0 0 3.592-8.686c0-1.489-.247-2.913-.754-4.226Z"
        stroke="#110E12"
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path transform="rotate(-90 0 30)" fill="#fff" d="M0 30h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Darkmode
