import { useRef, useState } from "react"

export const AddUser = ({onAdd}) => {

  const [error, setError] = useState("")
  const [user,setUser] = useState({
    name:"",
    age:18,
    salary:250000
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    if(!user.name.trim() || !user.age.trim() || !user.salary.trim()){
      return setError("Please fill all the fields")
    }
    setError("")
    onAdd(user)
    setUser({name:"", age:"", salary:""})
    
  }
    return <div>
      <h3>AddUser</h3>
      <form onSubmit={handleSubmit} >
        {error && <p className="error">{error}</p>}
        <div>
            <input type="text"
             placeholder = "enter your name" 
             value={user.name}
             onChange={e => setUser({...user, name:e.target.value})}
             />
             
        </div>
        <div>
            <input type="text"
             placeholder = "enter your age" 
             value={user.age}
             onChange={e => setUser({...user, age: +e.target.value})}/>
        </div>
        <div>
            <input type="text"
             placeholder = "enter your salary"
             value={user.salary}
             onChange={e => setUser({...user, salary: +e.target.value})} />
        </div>
        <div>
            <button >submit</button>
        </div>

      </form>
    </div>
}