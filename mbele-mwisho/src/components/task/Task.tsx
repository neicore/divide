import React from 'react'
import styles from './Task.module.scss'

const Task = () => {
  return (
    <div>
      <div>
        <div className={styles.round}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>

      <p>chevron_right</p>
    </div>
  )
}

export default Task
