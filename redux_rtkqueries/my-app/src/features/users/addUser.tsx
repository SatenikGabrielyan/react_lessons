import React, { useState } from "react"
import { InputUser } from "./types"
import { useAddUserMutation } from "./users.api"

export const AddUser = () => {
    const [user, setUser] = useState<InputUser>({
        name:"",
        salary:0
      })

    const [handleAdd, result] = useAddUserMutation()

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        handleAdd(user)
        .unwrap()
        .then(response => {
            console.log(response)
        })
        setUser({name:"", salary:0})
      }
    return <>
    <p>Add User</p>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name"
        value={user.name}
        onChange={e => setUser({...user, name:e.target.value})}
        />
        <input type="number" placeholder="salary" 
        value={user.salary}
        onChange={e => setUser({...user, salary:+e.target.value})}
        />
        <button>save</button>
    </form>
    </>
}