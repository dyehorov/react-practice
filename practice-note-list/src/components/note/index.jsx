import styles from "./styles.module.css"

export default function Note({
  text,
  notes,
  id,
  completed,
  setNoteAndUpdateLocalStorage,
}) {
  function handleChange() {
    const updatednotes = notes.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }

      return item
    })

    setNoteAndUpdateLocalStorage(updatednotes)
  }

  function deleteNote() {
    const newnotes = notes.filter(item => item.id !== id)

    setNoteAndUpdateLocalStorage(newnotes)
  }

  return (
    <li className={styles.listItem}>
      <input
        type="checkbox"
        name="checkbox"
        id={`checkbox-${id}`}
        checked={completed}
        onChange={handleChange}
      />
      <p className={completed ? styles.checkedNote : styles.uncheckedNote}>
        {text}
      </p>

      <button className={styles.button} onClick={deleteNote}>
        <i className="fa-solid fa-xmark fa-xl"></i>
      </button>
    </li>
  )
}
