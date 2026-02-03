import styles from "./styles.module.css"
import ListItem from "../listItem"

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className={styles.todoList}>
      {todos.length === 0 && <li>No todos, add new</li>}
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          text={todo.text}
          setTodos={setTodos}
          id={todo.id}
        />
      ))}
    </ul>
  )
}
