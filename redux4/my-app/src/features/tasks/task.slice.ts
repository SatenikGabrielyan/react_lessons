import axios from "axios";
import { createAppSlice } from "../../app/createAppSlice";
import type { IState, ITask } from "./types";
import { createSelector, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";



const initialState:IState = {
    list:[],
    currentFilter:"all"
}

const getList = (state:RootState) => state.tasks.list
const current = (state:RootState) => state.tasks.currentFilter

export const filterByStatus = createSelector([getList, current],(list, current) => {
    if(current == "all"){
        return list 
    } else {
        return list.filter(task => task.status === current)
    }


})
export const taskSlice = createAppSlice({
    name:"tasks",
    initialState,
    reducers:create => ({
        updateFilter:create.reducer<string>(
            (state, action) => {
                state.currentFilter = action.payload
            }
        ),
        getAllTasks:create.asyncThunk(
            async () => {
                const response = await axios.get("http://localhost:3004/tasks")
                return response.data
            },
            {
                fulfilled:(state, action:PayloadAction<ITask[]>) => {
                    state.list = action.payload
                }
            }
        )

    }),
    selectors: {
        tasks: state => state.list,
        currentFilter:state => state.currentFilter,
        filteredTasks:state => {
            if(state.currentFilter === "all")
                return state.list
            else 
            return state.list.filter(task => task.status === state.currentFilter)
        }
    }
}) 

export const {tasks ,currentFilter, filteredTasks} = taskSlice.selectors
export const {getAllTasks, updateFilter} = taskSlice.actions