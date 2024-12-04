import { useContext } from "react"
import { UserContext } from "../context"

export const UserList= () => {
    const {users, onRemove} = useContext(UserContext)
    
    return <>
    <h3>UserList</h3>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>salary</th>
                <th>actions</th>
            </tr>

        </thead>
        <tbody>
            {
                users.map(user => 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.salary}</td>
                        <td>
                            <button onClick={() =>onRemove(user.id)}>x</button>
                            <button>+</button>
                            <button>-</button>
                        </td>
                    </tr>
                )
            }

        </tbody>
    </table>
    </>

}