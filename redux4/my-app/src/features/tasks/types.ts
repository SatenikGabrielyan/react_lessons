export interface IState{
    list:ITask[]
    currentFilter:string

}
export interface ITask{
    id:string
    text:string
    status:string
}