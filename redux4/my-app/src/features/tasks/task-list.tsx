import { useSelector } from "react-redux"
import { filterByStatus, filteredTasks, getAllTasks, tasks } from "./task.slice"
import { useEffect } from "react"
import { TaskItem } from "./task-item"
import { Filter } from "./filter"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

export const TaskList = () => {

    const list = useAppSelector(filterByStatus)
    const dispatch = useAppDispatch()
   

    useEffect(() => {
        dispatch(getAllTasks())

    }, [])
    return <>
    <Filter/>
   
    <div className="list">
    {
        list.map(task => <TaskItem key={task.id} task = {task}/>)
    }
    </div>
    </>
}