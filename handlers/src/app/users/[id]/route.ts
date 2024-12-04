import { NextRequest } from "next/server";

interface IProps{
    params:{id:number}
}
export const GET = async (req:NextRequest, {params}:IProps) =>{
    let user = await getUserById(params.id)
    if(!user){
        return Response.json({user:null})
    } return Response.json({user})

}