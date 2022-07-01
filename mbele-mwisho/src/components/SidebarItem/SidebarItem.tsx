import Link from 'next/link'
import React, { ReactElement } from 'react'
import { CounterBadgeProps } from '../CounterBadge/CounterBadge'
import { FolderColorProps } from '../folderColor/FolderColor'
import { IconProps } from '../IconButton/IconButton'
import styles from './SidebarItem.module.scss'

type Props = {
  icon: ReactElement<IconProps | FolderColorProps>
  label: string
  counterBadge?: ReactElement<CounterBadgeProps>
  href: string
}

const SidebarItem = ({ icon, label, counterBadge, href }: Props) => {
  return (
    <li className={`${styles.sidebar_item}`}>
      <Link href={href}>
        <div>
          <div className={styles.group}>
            {icon}
            <p>{label}</p>
          </div>

          {counterBadge}
        </div>
      </Link>
    </li>
  )
}

export default SidebarItem
