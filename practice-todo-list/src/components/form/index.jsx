import styles from "./styles.module.css"
import { useState } from "react"

export default function Form({ todos, setTodos }) {
  const [inputText, setInputText] = useState("")

  function handleFormSubmit(event) {
    event.preventDefault()
    if (inputText.trim().length === 0) return

    setTodos([...todos, { id: crypto.randomUUID(), text: inputText }])
    setInputText("")
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        value={inputText}
        type="text"
        name="inputTodo"
        placeholder="Add new task"
        id="inputTodo"
        onChange={event => setInputText(event.target.value)}
      />
      <button type="submit">
        <i className="fa-solid fa-plus fa-xl"></i>
      </button>
    </form>
  )
}
