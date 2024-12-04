import {UserItem} from './UserItem'
export const UserList = ({users,onSalaryUp}) => {
    return <div>
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
                    users.map(item => <UserItem key={item.id} user={item} onSalaryUp = {onSalaryUp} /> )
                }
            </tbody>
        </table>
    </div>
}   