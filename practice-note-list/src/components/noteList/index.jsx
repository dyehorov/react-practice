import styles from "./styles.module.css"
import Note from "../note"

export default function NoteList({ notes, setNoteAndUpdateLocalStorage }) {
  return (
    <ul className={styles.noteList}>
      {notes.length === 0 && <li>No notes, add new</li>}
      {notes.map(note => (
        <Note
          key={note.id}
          text={note.text}
          notes={notes}
          completed={note.completed}
          id={note.id}
          setNoteAndUpdateLocalStorage={setNoteAndUpdateLocalStorage}
        />
      ))}
    </ul>
  )
}
