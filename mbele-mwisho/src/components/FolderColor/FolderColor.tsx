import React from 'react'

export type FolderColorProps = {
  color: string
}

const FolderColor = ({ color }: FolderColorProps) => {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        backgroundColor: color,
        borderRadius: 100,
      }}
    ></div>
  )
}

export default FolderColor
