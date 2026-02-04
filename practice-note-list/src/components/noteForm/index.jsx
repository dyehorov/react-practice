import styles from "./styles.module.css"
import { useState } from "react"

export default function NoteForm({ notes, setNoteAndUpdateLocalStorage }) {
  const [inputText, setInputText] = useState("")

  function addNote(event) {
    event.preventDefault()
    if (inputText.trim().length === 0) return

    const newnotes = [
      ...notes,
      { id: crypto.randomUUID(), text: inputText, completed: false },
    ]

    setNoteAndUpdateLocalStorage(newnotes)
    setInputText("")
  }

  return (
    <form className={styles.form} onSubmit={addNote}>
      <input
        value={inputText}
        type="text"
        name="inputnote"
        placeholder="Add new task"
        id="inputnote"
        onChange={event => setInputText(event.target.value)}
      />
      <button type="submit">
        <i className="fa-solid fa-plus fa-xl"></i>
      </button>
    </form>
  )
}
