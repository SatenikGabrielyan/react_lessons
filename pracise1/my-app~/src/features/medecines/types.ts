export interface IMedecine{
    id:string
    name:string
    photo:string
    price:number
}

export interface IState{
    list:IMedecine[]
    currentFilter:string
}