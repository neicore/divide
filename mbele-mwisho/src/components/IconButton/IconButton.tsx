import React, { ComponentType, ReactElement } from 'react'
import styles from './IconButton.module.scss'

type Props = {
  icon: ReactElement<IconProps>
}

export type IconProps = {
  color?: string
}

const IconButton = ({ icon }: Props) => {
  return <div className={styles.button}>{icon}</div>
}

export default IconButton
