import * as React from 'react'
import { IconProps } from '../IconButton/IconButton'

const AddCategory = ({ color }: IconProps) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1a1 1 0 1 0-2 0h2ZM9 19a1 1 0 1 0 2 0H9ZM9 1v18h2V1H9Z"
      fill={color}
    />
    <path
      d="M1 9a1 1 0 0 0 0 2V9Zm18 2a1 1 0 1 0 0-2v2ZM1 11h18V9H1v2Z"
      fill={color}
    />
  </svg>
)

export default AddCategory
