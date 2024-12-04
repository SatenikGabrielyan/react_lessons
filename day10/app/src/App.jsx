import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { UserContext } from './context'
import { AddUser } from './components/AddUser'

function App() {
  const [users, setUsers] = useState([
    {id:101, name: "James",age: 23, salary: 210000},
    {id: 102, name: "Alice", age: 27, salary: 230000},
    {id: 103, name: "Robert", age: 31, salary: 195000},
    {id: 104, name: "Emily", age: 29, salary: 220000},
    {id: 105, name: "Michael", age: 35, salary: 250000},
    {id: 106, name: "Sophia", age: 26, salary: 205000}


  ])

  const handleDelete = id => {
    setUsers(users.filter(user => user.id != id));
  }

  const handleAdd = user => {
    setUsers([...users, {...user, id:Date.now()}]);
  }


  return (
    <>
    <UserContext.Provider value={{users, onRemove:handleDelete, onAdd:handleAdd}}>
         <Dashboard/>
    </UserContext.Provider>
    
    
    </>
  )
}

export default App
