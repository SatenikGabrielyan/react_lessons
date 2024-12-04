import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { currentFilter, updateFilter } from "./task.slice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

export const Filter = () => {

    const criteria = ["all", "unstarted", "on process", "completed"]

    const current = useAppSelector(currentFilter)
    const dispatch = useAppDispatch()
    return <>
    <p>current filter:<strong>{current}</strong></p>
    {
        criteria.map((cr, index) => <React.Fragment key={index}>
            <input 
            type="radio" 
            value={cr}
            checked={cr === current}
            onChange={(e) => dispatch(updateFilter(e.target.value))}

            />
            <small>{cr}</small>
        </React.Fragment>)
    }

    </>
}