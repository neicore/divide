import React from 'react'
import LogoIcon from './LogoIcon'
import styles from './Logo.module.scss'

function Logo() {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <h1>Divide</h1>
    </div>
  )
}

export default Logo
