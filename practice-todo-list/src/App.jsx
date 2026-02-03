import "./App.css"
import { useState } from "react"
import TodoList from "./components/todoList"
import Form from "./components/form"

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="container">
      <h1 className="title">Your To Do</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
