import * as React from 'react'

const Calendar = () => (
  <svg width={30} height={31} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x={1}
      y={4.432}
      width={28}
      height={25.567}
      rx={3}
      stroke="#343A40"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M1 11h28M6 1v5.27M15 1v5.27M24 1v5.27"
      stroke="#343A40"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <rect x={4} y={13} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={10} y={13} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={16} y={13} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={22} y={13} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={4} y={18} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={4} y={23} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={10} y={18} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={10} y={23} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={16} y={18} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={16} y={23} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={22} y={18} width={3.851} height={3.851} rx={1} fill="#343A40" />
    <rect x={22} y={23} width={3.851} height={3.851} rx={1} fill="#343A40" />
  </svg>
)

export default Calendar
