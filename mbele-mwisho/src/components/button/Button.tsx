import React from 'react'
import { Props } from './types'
import styles from './Button.module.scss'

const Button = ({ title, type, style }: Props) => {
  const buttonStyle =
    style === 'solid' ? styles.button : `${styles.button} ${styles.outline}`

  return (
    <button type={type} className={buttonStyle}>
      {title}
    </button>
  )
}

export default Button
