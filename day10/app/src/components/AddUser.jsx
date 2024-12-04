import { useContext, useState } from "react"
import { UserContext } from "../context";

export const AddUser= () => {
    const [user, setUser] = useState({
        name:"",
        age:"",
        surname:""
    });
    const {onAdd} = useContext(UserContext)

    const handleSubmit = event => {
        event.preventDefault();
        onAdd(user);
    }

    return <>
    <h3>AddUser</h3>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" 
        value={user.name}
        onChange={event => setUser({...user, name:event.target.value})}/>
        <input type="text" placeholder="age"
        value={user.age}
        onChange={event => setUser({...user, age:event.target.value})}/>
        <input type="text" placeholder="salary"
        value={user.salary}
        onChange={event => setUser({...user, salary:event.target.value})} />
        
        <button>save</button>
    </form>
    </>

}