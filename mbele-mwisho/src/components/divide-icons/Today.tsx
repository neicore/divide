import * as React from 'react'

const Today = () => (
  <svg width={30} height={31} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x={1}
      y={4.432}
      width={28}
      height={25.567}
      rx={3}
      stroke="#110E12"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M1 11h28M6 1v5.27M15 1v5.27M24 1v5.27"
      stroke="#110E12"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <mask id="a" fill="#fff">
      <rect x={4.054} y={13.162} width={3.851} height={3.851} rx={1} />
    </mask>
    <rect
      x={4.054}
      y={13.162}
      width={3.851}
      height={3.851}
      rx={1}
      fill="#110E12"
      stroke="#110E12"
      strokeWidth={3.851}
      mask="url(#a)"
    />
  </svg>
)

export default Today
