import React from 'react'
import styles from './CounterBadge.module.scss'

export type CounterBadgeProps = {
  value: string
}

const CounterBadge = ({ value }: CounterBadgeProps) => {
  return <div className={styles.counter_badge}>{value}</div>
}

export default CounterBadge
