import * as React from 'react'

const NewTask = () => (
  <svg width={142} height={142} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <path
        d="M106 62a34.998 34.998 0 0 1-35 35 35 35 0 1 1 35-35ZM73.187 46.687a2.188 2.188 0 0 0-4.374 0v13.126H55.687a2.188 2.188 0 0 0 0 4.374h13.126v13.126a2.188 2.188 0 0 0 4.374 0V64.186h13.126a2.188 2.188 0 0 0 0-4.374H73.186V46.687Z"
        fill="#110E12"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={142}
        height={142}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={8}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_613_444"
        />
        <feOffset dy={9} />
        <feGaussianBlur stdDeviation={14} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_613_444" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={6} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="effect1_dropShadow_613_444"
          result="effect2_dropShadow_613_444"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={4}
          in="SourceAlpha"
          result="effect3_dropShadow_613_444"
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend
          in2="effect2_dropShadow_613_444"
          result="effect3_dropShadow_613_444"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_613_444"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default NewTask
