import styles from "./styles.module.css"

export default function ListItem({ text, setTodos, id }) {
  return (
    <li className={styles.listItem}>
      <p>{text}</p>
      <button
        className={styles.deleteButton}
        onClick={() => setTodos(prev => prev.filter(item => item.id !== id))}
      >
        <i className="fa-solid fa-xmark fa-xl"></i>
      </button>
    </li>
  )
}
