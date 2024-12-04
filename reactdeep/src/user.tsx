import React from "react";
import { IState } from "./types";

export class User extends React.Component{
    state:IState = {
        count:10,
        name:"Ashot"
    }
    
    updateCount(){
        this.setState(prev => ({...prev, count:prev.count+1}))

    }
    componentDidMount(): void {
        
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }
    componentWillUnmount(): void {
        
    }


    render(){
        return <>
        <h1>Users</h1>
        <h3>num:{this.state.count}</h3>
        <button onClick={() => this.updateCount()}>up</button>
        </>
    }
}