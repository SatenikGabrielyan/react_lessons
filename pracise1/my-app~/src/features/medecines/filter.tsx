import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { updateFilter } from "./medecine.slice"


export const Filter = () => {
    const [text, setText] = useState<string>("")
    const dispatch = useAppDispatch()




    return < React.Fragment>
    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-256.png" height={50} width={50}/>
    <input type="text" 
    value={text}
    onChange={e => dispatch(updateFilter(e.target.value))}/>
    <button>Search</button>
    </React.Fragment>
}