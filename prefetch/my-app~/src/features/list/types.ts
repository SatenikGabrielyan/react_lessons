export interface IListItem{
    id:number
    text:string

}

export interface IResponse{
    next:number | null
    data:IListItem[]
    items:number
}