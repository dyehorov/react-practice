import "./App.css"
import { useState } from "react"
import NoteList from "./components/noteList"
import NoteForm from "./components/noteForm"
import NoteFilter from "./components/noteFilter"

let notesFromLocalStorage = []

try {
  const answerFromLocalStorage = localStorage.getItem("notes")
  notesFromLocalStorage = answerFromLocalStorage
    ? JSON.parse(answerFromLocalStorage)
    : []
} catch (error) {
  notesFromLocalStorage = []
}

function App() {
  const [notes, setNotes] = useState(notesFromLocalStorage)
  const [filter, setFilter] = useState("All")

  function setNoteAndUpdateLocalStorage(notes) {
    setNotes(notes)
    localStorage.setItem("notes", JSON.stringify(notes))
  }

  function filterNotes(filterParam) {
    setFilter(filterParam)
  }

  const filteredNotes = notes.filter(note => {
    if (filter === "Incomplete") {
      return note.completed === false
    }

    if (filter === "Completed") {
      return note.completed === true
    }

    return true
  })

  return (
    <div className="container">
      <h1 className="title">Your Notes</h1>
      <NoteForm
        notes={notes}
        setNoteAndUpdateLocalStorage={setNoteAndUpdateLocalStorage}
      />
      <NoteFilter filterNotes={filterNotes} />
      <NoteList
        notes={filteredNotes}
        setNoteAndUpdateLocalStorage={setNoteAndUpdateLocalStorage}
      />
    </div>
  )
}

export default App
