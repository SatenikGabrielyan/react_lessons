import axios from "axios";
import { createAppSlice } from "../../app/createAppSlice";
import { IMedecine, IState } from "./types";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { aC } from "vitest/dist/reporters-yx5ZTtEV.js";

export const initialState:IState = {
    list:[],
    currentFilter:""
}


const getList = (state:RootState) => state.medecine.list
const current = (state:RootState) => state.medecine.currentFilter
const filterByName = createSelector([getList, current], (list, current) => {
    if(current === ""){
        return list
    }
    return list.filter(m => m.name === current)
})

export const medicineSlice = createAppSlice({
    name:"medecine",
    initialState,
    reducers:create => ({
        getAllMedicines:create.asyncThunk( async() => {
            const response = await axios.get("http://localhost:3004/medecines")
            return response.data
        },
        {
            fulfilled:(state, action:PayloadAction<IMedecine[]>) => {
                state.list = action.payload
            }

        },

      
    ),
      updateFilter:create.reducer<string>((state, action) => {
        state.currentFilter = action.payload
      

      })
    }),
    selectors:{
        medicines:state => state.list,
        total: state => state.list.reduce((a,b) => a + b.price , 0),
        currentFilter:state => state.currentFilter,
        filtered:state => {
            if(state.currentFilter === ""){
                return state.list
            }
            return state.list.filter(i => i.name === state.currentFilter)
        }
    }
})


export const {getAllMedicines, updateFilter} = medicineSlice.actions 
export const {medicines, total} = medicineSlice.selectors