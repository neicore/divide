import React from 'react'
import styles from './Button.module.scss'

type Props = {
  title: string
  type?: 'submit' | 'reset' | 'button'
  style: 'solid' | 'outline'
}

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
