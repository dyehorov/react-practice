import styles from "./styles.module.css"
import { useState } from "react"

export default function Form({ todos, setTodos }) {
  const [inputText, setInputText] = useState("")

  function handleFormSubmit(event) {
    event.preventDefault()
    event.target.closest("BUTTON").previousElementSibling.value = ""
    setTodos([...todos, { id: Math.random(), text: inputText }])
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="inputTodo"
        placeholder="Add new task"
        id="inputTodo"
        onChange={event => setInputText(event.target.value)}
      />
      <button type="submit" onClick={handleFormSubmit}>
        <i className="fa-solid fa-plus fa-xl"></i>
      </button>
    </form>
  )
}
