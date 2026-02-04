import styles from "./styles.module.css"

export default function FilterButton({
  title,
  id,
  focused,
  filterParam,
  handleClick,
}) {
  return (
    <>
      <button
        className={`${styles.noteFilterButton} ${focused ? styles.picked : ""}`}
        id={id}
        onClick={event => handleClick(event.target)}
        data-filterparam={filterParam}
      >
        {title}
      </button>
    </>
  )
}
