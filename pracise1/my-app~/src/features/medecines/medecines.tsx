import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllMedicines, medicines, total } from "./medecine.slice"
import { MedicineItem } from "./medicine-item"
import { Filter } from "./filter"

export const Medicine = () => {

    const dispatch = useAppDispatch()
    const list = useAppSelector(medicines)
    const sum = useAppSelector(total)
   

    useEffect(() => {
       
        dispatch(getAllMedicines())
       
    },[])


    

    
    return <>
    <Filter/>
    <h3>Medicine</h3>
    {
        list.map(med => <MedicineItem key={med.id} med = {med}/>)
    }
    <h3>Total$ {sum}</h3>
    
    </>
}