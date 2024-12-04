import "./App.css"
import { AddUser } from "./components/AddUser"
import { UserList } from "./components/UserList"
import { useState } from 'react'
export default function App(){

  const [users, setUsers] = useState([
    {id:101, name:"Tigran", age:24, salary:300000},
    {id:102, name:"Anahit", age:25, salary:310000},
    {id:103, name:"Arman", age:26, salary:320000},
    {id:104, name:"Sona", age:23, salary:295000},
    {id:105, name:"Narek", age:27, salary:330000},
    {id:106, name:"Mariam", age:24, salary:305000},
    {id:107, name:"Karen", age:28, salary:340000},
    {id:108, name:"Lilit", age:22, salary:290000},
    {id:109, name:"Gor", age:29, salary:350000},
    {id:110, name:"Arpi", age:25, salary:315000}
  ])

  const handleSalaryUp = (id) => {
    setUsers(users.map(user => 
      user.id !== id ? user : { ...user, salary: user.salary + 72000 }
    ));
  }

  const addUser = user => {
    setUsers([...users, {...user, id:101 + users.length}])
  }
  return <>

     <AddUser onAdd = {addUser}
        />
        <UserList users = {users} onSalaryUp = {handleSalaryUp}
            />
  </>
}
