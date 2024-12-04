import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Child1 from './child1'
import Child2 from './child2'


let list = new Set()
function App() {

  console.log("App renders")
  const [num, setNum] = useState(10)
  const [count, setCount] = useState(0)
  const form = useMemo(() => count+1,[count])

  // const countUp = () => {
  //   setCount(count+1)
  // }

  const countUp = useCallback(() => {
    setCount(count+1)
  },[count])
  list.add(countUp)
  console.log(list.size)

  return (
    <>
    <h2>Count {num}</h2>
    <button onClick={() => setNum(num + 1)}> up</button>
      <Child1/>
      <Child2/>
      
    </>
  )
}

export default App
