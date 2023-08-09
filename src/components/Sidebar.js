import style from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <ul>
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
        <li>Section 4</li>
        <li>Section 5</li>
        <li>Section 6</li>
        <li>Section 7</li>
      </ul>
    </aside>
  )
}
