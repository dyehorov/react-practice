import styles from "./styles.module.css"
import FilterButton from "../filterButton"
import { useState } from "react"

export default function NoteFilter({ filterNotes }) {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      title: "All",
      focused: true,
      filterParam: "All",
    },
    {
      id: 2,
      title: "Completed",
      focused: false,
      filterParam: "Completed",
    },
    {
      id: 3,
      title: "Not completed",
      focused: false,
      filterParam: "Incomplete",
    },
  ])

  function handleClick(buttonClicked) {
    const updatedButtons = buttons.map(button => {
      if (button.id === +buttonClicked.id) {
        return { ...button, focused: true }
      }

      return { ...button, focused: false }
    })

    setButtons(updatedButtons)
    filterNotes(buttonClicked.dataset.filterparam)
  }

  return (
    <div className={styles.noteFilterContainer}>
      {buttons.map(button => (
        <FilterButton key={button.id} {...button} handleClick={handleClick} />
      ))}
    </div>
  )
}
