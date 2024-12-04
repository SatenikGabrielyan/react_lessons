
import { Users } from "./features/users/users"
import "./App.css"
import { AddUser } from "./features/users/addUser"


const App = () => {
 
  return (
    <div className="App">
      <AddUser/>
    <Users/>
    </div>
  )
}

export default App
