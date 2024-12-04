import React from "react"


function Child1(){
     console.log("Child1 renders")
    return <>
    <h1>Child1</h1>
    </>
}
export default React.memo(Child1)