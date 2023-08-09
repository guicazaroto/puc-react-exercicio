/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from './Header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <h3>Logo</h3>
      <div className={styles.inputGroup}>
        <ul className={styles.navList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  )
}