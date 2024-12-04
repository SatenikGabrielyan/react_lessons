import { useGetQuotesQuery } from "../quotes/quotesApiSlice"
import { useGetUsersQuery } from "./users.api"

export const Users = () => {
    const {isLoading, error, data} = useGetUsersQuery(null)
    
    return <>
    <h3>Users</h3>
    {
        isLoading && <p>Loading...</p>}
        {
            data && data.map(user => 
                <div key={user.id}>
                    <p>{user.name} {user.salary}AMD</p>
                </div>
            )
        }
    
    </>
}