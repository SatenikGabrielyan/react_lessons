import { ITask } from "./types"

interface IProps{
    task:ITask
}

export const TaskItem:React.FC<IProps> = ({task}) => {
    return <div>
        <p>{task.text}</p>
        <small>{task.status}</small>
    </div>
}