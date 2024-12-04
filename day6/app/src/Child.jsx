import { useEffect } from "react"

export const Child = ({id, onRemove}) => {
    useEffect(() => {
        return () => console.log("byee",id);

    },[])
    return <>
    <p>Child {id}</p>
    <button onClick={() => onRemove(id)}>x</button>
    </>
}