import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { TaskList } from "./features/tasks/task-list"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <TaskList/>
    </div>
  )
}

export default App
