import React from 'react'
import { Props } from './types'
import style from './Button.module.scss'

const Button = ({ title, type }: Props) => {
  return (
    <button type={type} className={style.button}>
      {title}
    </button>
  )
}

export default Button
