export interface ICourse{
    id:string
    title:string
    modules:IModule[]
}

export interface IModule{
    id:string
    name:string
}

export type InputCourse = Omit<ICourse,"id">

export type InputModule = Omit<IModule, "id">