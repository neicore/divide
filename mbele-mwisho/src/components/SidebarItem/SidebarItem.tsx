import React, { ReactElement } from 'react'
import { CounterBadgeProps } from '../CounterBadge/CounterBadge'
import { FolderColorProps } from '../FolderColor/FolderColor'
import { IconProps } from '../IconButton/IconButton'
import styles from './SidebarItem.module.scss'

type Props = {
  icon: ReactElement<IconProps | FolderColorProps>
  label: string
  counterBadge?: ReactElement<CounterBadgeProps>
}

const SidebarItem = ({ icon, label, counterBadge }: Props) => {
  return (
    <li className={`${styles.sidebar_item}`}>
      <div className={styles.group}>
        {icon}
        <p>{label}</p>
      </div>

      {counterBadge}
    </li>
  )
}

export default SidebarItem
